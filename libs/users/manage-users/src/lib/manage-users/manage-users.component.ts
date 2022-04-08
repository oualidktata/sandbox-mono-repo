import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '@pwc/users/domain';
import { Observable } from 'rxjs';
import { User } from '@pwc/users/domain';

@Component({
  selector: 'pwc-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {
  users$: Observable<User[] | null> | null = this.usersFacade.users$; // plug to the stream
  selectedUser$: Observable<User | null> = this.usersFacade.selectedUser$;
  constructor(private usersFacade: UsersFacade) {}

  ngOnInit(): void {
    this.usersFacade.load();
    //console.log(`ManageUsersComponent.onInit${this.users$}`);
  }
  // load(): void {
  //this.searchFacade.load();
  // }
  filterList(filter: any): void {
    this.usersFacade.setFilter(filter.target.value);
    console.log(`ManageUsersComponent.filterList ${filter.target.value}`);
  }
  deleteUser(user: User) {
    this.usersFacade.deleteUser(user);
    // this.usersFacade
    // .deleteUser(user)
    // .subscribe(
    //   () => (this.users = this.users?.filter((u) => u.id !== user.id))
    // );
  }

  toggleReminder(user: User) {
    user.active = !user.active;
    this.usersFacade.toggleReminder(user).subscribe();
  }

  addUser(user: User) {
    this.usersFacade.addUser(user);
    //    this.usersFacade.addUser(user).subscribe((user) => this.users?.push(user));
  }
}
