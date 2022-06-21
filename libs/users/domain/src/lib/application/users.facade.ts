import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, iif, Observable, of } from 'rxjs';
import {
  concatMap,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  retry,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { User } from '../entities/user.model';
import { UserState } from '../entities/user.state';
import {
  UserSearchCriteria,
  UserClientSideFilters,
} from '../entities/userSearchCriteria.model';
import { InterestService } from '../infrastructure/interest.service';
import { UserService } from '../infrastructure/users.service';
import { IInterestViewModel } from '../entities/interest-view.model';
import { Interest } from '../entities/interest.model';
import { state } from '@angular/animations';
@Injectable({ providedIn: 'root' })
export class UsersFacade {
  private _state: UserState = {
    //whatever:true,
    //interests:[] as Interest[],
    serverSideCriteria: {} as UserSearchCriteria,
    clientSideFilters: {} as UserClientSideFilters,
    selectedUser: {} as User,
    usersFromServer: [],
    users: [],
    loading: false,
  };
  private store = new BehaviorSubject<UserState>(this._state);
  public state$ = this.store.asObservable();
  //initiate serverSide fetch
  setDefaults(criteria: UserSearchCriteria, filters: UserClientSideFilters) {
    this.store.next(
      (this._state = {
        ...this._state,
        serverSideCriteria: criteria,
        clientSideFilters: filters,
      })
    );
    console.log(
      `setDefaults: ${JSON.stringify(this._state.clientSideFilters)}`
    );
  }
  //downstream streams created from upStream(state$) using selector
  serverSideCriteria$ = this.state$.pipe(
    map((state) => state.serverSideCriteria), //selector
    distinctUntilChanged()
  );
  //interests$:Observable<IInterestViewModel[]>
  //interests$ = this.state$.pipe(map((state) => state.interests),distinctUntilChanged());
  interests$=this.interestService.getAll().pipe(map((interests) =>
    interests.map(interest=><IInterestViewModel>{id:interest.id,name:interest.name} )  
  ));

  clientSideFilter$ = this.state$.pipe(
    map((state) => state.clientSideFilters),
    distinctUntilChanged()
  );
  selectedUser$ = this.state$.pipe(
    map((state) => state.selectedUser),
    distinctUntilChanged()
  );
  loading$ = this.state$.pipe(map((state) => state.loading));
  filteredFromServer$=this.serverSideCriteria$
  .pipe(
    distinctUntilChanged(),
    switchMap((criteria) => {
      return this.service
        .getUsersByCriteria(criteria)
        //.pipe(retry(3), startWith([]));
    }),tap(data=>console.log(`filteredFromServer.length${data.length}`))
  );

  filteredFromClient$=combineLatest([this.clientSideFilter$,this.filteredFromServer$]).pipe(
    map(([filters,users])=>
    {
      return this.applyClientFilterToCachedUsers(filters,users);
    }),tap(data=>console.log(`filteredFromClient.length${data.length}`))
  );

//interests$=this.interestService.getAll().share();
 vm$: Observable<UserState> = combineLatest([
    this.serverSideCriteria$,
    this.clientSideFilter$,
    this.selectedUser$,
    this.filteredFromServer$,
    this.filteredFromClient$,
    this.loading$
  ]).pipe(
    map(
      ([
        //interests,
        serverSideCriteria,
        clientSideFilters,
        selectedUser,
        usersFromServer,
        users,
        loading
      ]) =>({
        //interests,
        serverSideCriteria,
        clientSideFilters,
        selectedUser,
        usersFromServer,
        users,
        loading
      })
    )
  );

  //One facade for managing users shared by any consumer
  constructor(private service: UserService,private interestService:InterestService) {
  //   this.interestService.getAll().subscribe({next:(interests)=>
  //   this.store.next((this._state={...this._state,interests:interests}))
  // });
  }//end of constructor

  applyClientFilterToCachedUsers = (
    clientFilter: UserClientSideFilters,
    usersFromServer: User[]
  ) => {
    let filteredUsers=usersFromServer
    if (clientFilter.filter !== '') {
      filteredUsers =filteredUsers.filter(
        (u) =>
          u.firstName.includes(clientFilter.filter) ||
          u.lastName.includes(clientFilter.filter)
      );
    }
    filteredUsers = filteredUsers.slice(
      0,
      Number(clientFilter.topFilter)
    );
    return filteredUsers;
  };
  updateFilter(filter: string) {
    let updatedFilter = { ...this._state.clientSideFilters, filter };
    this.saveClientState(updatedFilter);
  }
  updateTopFilter(topFilter: string) {
    let updatedFilter = { ...this._state.clientSideFilters, topFilter };
    this.saveClientState(updatedFilter);
  }
  saveClientState=(updatedFilter:UserClientSideFilters)=>{
    this.store.next(
      (this._state = {
        ...this._state,
        clientSideFilters: updatedFilter,
        //users:this.applyClientFilterToCachedUsers(updatedFilter,this._state.usersFromServer),
      })
    );
    console.log(
      `facade.updateTopFilter.clientSideFilters${this._state.clientSideFilters.topFilter}`
    );
  }
  updateActive(active: boolean) {
    this.store.next(
      (this._state = {
        ...this._state,
        serverSideCriteria: { ...this._state.serverSideCriteria, active },
      })
    );
    console.log(`facade.updateActive${active}`);
  }

    selectUser(user: User) {
    //selected user in list not in service to refactor
    this.interestService.getAll().subscribe(
      (interests)=>
      user.interestNames=interests.filter(i=>user.interests.includes(i.id)));
    this.store.next((this._state = { ...this._state, selectedUser: user }));
  }
  deleteUser(user: User): Observable<User> {
    return this.service.deleteUser(user);
  }

  toggleReminder(user: User): Observable<User> {
    //user.active = !user.active;
    return this.service.updateUserReminder(user);
  }

  addUser(user: User): Observable<User> {
    return this.service.addUser(user);
  }
}
