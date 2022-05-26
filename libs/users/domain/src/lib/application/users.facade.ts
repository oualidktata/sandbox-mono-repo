import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
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
import { UserService } from '../infrastructure/users.service';

@Injectable({ providedIn: 'root' })
export class UsersFacade {
  private _state: UserState = {
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
  }
loadUsers(serverSideCriteria:UserSearchCriteria,clientFilters:UserClientSideFilters){

}
  //downstream streams created from upStream(state$) using selector
  serverSideCriteria$ = this.state$.pipe(
    map((state) => state.serverSideCriteria), //selector
    distinctUntilChanged()
  );
  clientSideFilter$ = this.state$.pipe(
    map((state) => state.clientSideFilters),
    distinctUntilChanged()
  );
  users$ = this.state$.pipe(
    map((state) => state.users),
    distinctUntilChanged()
  );
  usersFromServer$ = this.state$.pipe(
    map((state) => state.usersFromServer),
    distinctUntilChanged()
  );
  selectedUser$ = this.state$.pipe(
    map((state) => state.selectedUser),
    distinctUntilChanged()
  );
  loading$ = this.state$.pipe(map((state) => state.loading));
  vm$: Observable<UserState> = combineLatest([
    this.serverSideCriteria$,
    this.clientSideFilter$,
    this.selectedUser$,
    this.usersFromServer$,
    this.users$,
    this.loading$,
  ]).pipe(
    map(
      ([
        serverSideCriteria,
        clientSideFilters,
        selectedUser,
        usersFromServer,
        users,
        loading,
      ]) => {
        return {
          serverSideCriteria,
          clientSideFilters,
          selectedUser,
          usersFromServer,
          users,
          loading,
        };
      }
    )
  );

  //One facade for managing users shared by any consumer
  constructor(private service: UserService) {
    this.vm$.subscribe(x=>console.log(`$vm.users.length: ${x.users.length}`))
     this.serverSideCriteria$.pipe(
      switchMap((criteria) => {
        return this.service
          .getUsersByCriteria(criteria)
          .pipe(retry(3), startWith([]));
      })
    ).subscribe({
        next: (usersFromServer) => {
          this.store.next(
            (this._state = {
              ...this._state,
              usersFromServer,
              users: this.applyClientFilterToCachedUsers(this._state.clientSideFilters,usersFromServer),
            })
          );

          console.log(
            `serverSideCriteria in STATE${usersFromServer.length} after Server criteria updated`
          );
        },
      });


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
        users:this.applyClientFilterToCachedUsers(updatedFilter,this._state.usersFromServer),
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
