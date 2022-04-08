import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../entities/user.model';
import { UserService } from '../infrastructure/users.service';

@Injectable({ providedIn: 'root' })
export class UsersFacade {
  private userListSubject = new BehaviorSubject<User[] | null>(null);
  private selectedUserSubject = new BehaviorSubject<User>({} as User);
  private currentFilter = new BehaviorSubject<string>('');
  users$ = this.userListSubject.asObservable(); //stream as observable to async them in components
  selectedUser$ = this.selectedUserSubject;
  currentFilter$ = this.currentFilter;

  //One facade for managing users shared by any consumer
  constructor(private service: UserService) {}

  setFilter(filter: string) {
    this.currentFilter.next(filter);
    console.log(`facade.setFilter${filter}`);
  }
  load(): void {
    this.service.getUsers().subscribe(
      (list) => {
        this.userListSubject.next(list); //adds the data as it comes to the BSubject
        console.log(`facade.load callback${list}`);
      },
      (err) => {
        console.error('error', err);
      }
    );
  }
  selectUser(user: User) {
    //selected user in list not in service to refactor
    this.selectedUserSubject.next(user);
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
