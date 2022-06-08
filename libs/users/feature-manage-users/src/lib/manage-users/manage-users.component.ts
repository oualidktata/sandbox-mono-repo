import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { UserSearchCriteria, UsersFacade,User, UsersDomainModule, UserClientSideFilters } from '@pwc/users/domain';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '@pwc/shared/material';
import { DetailsModule } from '../details/details.component';
import { AddUserModule } from '../add-user/add-user.component';
import { UpdateUserModule } from '../update-user/update-user.component';
import { UsersListModule } from '../list/list.component';
import { SearchUsersModule } from '../search/search.component';
import { ListViewModule } from '../list-view/list-view.component';
import { Observable } from 'rxjs';
import { UserState } from 'libs/users/domain/src/lib/entities/user.state';

@Component({
  selector: 'pwc-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageUsersComponent implements OnInit{
  // users$: Observable<User[] | null> | null = this.usersFacade.users$; // plug to the stream
  // selectedUser$: Observable<User | null> = this.usersFacade.selectedUser$;
  // criteria$:Observable<UserSearchCriteria>=this.usersFacade.criteria$;
  //state$=merge(this.usersFacade.criteria$,this.usersFacade.selectedUser$,this.usersFacade.users$);
  // users$: Observable<User[] | null> | null = this.usersFacade.users$; // plug to the stream
  // selectedUser$: Observable<User | null> = this.usersFacade.selectedUser$;
  // criteria$:Observable<UserSearchCriteria>=this.usersFacade.criteria$;
  //state$=merge(this.usersFacade.criteria$,this.usersFacade.selectedUser$,this.usersFacade.users$);
  vm$!: Observable<UserState>;
  debug = false;
  displayMode:string;
  onDisplayModeChange=(value:string)=>{
   console.log(value);
    this.displayMode=value;
  }
  constructor(private usersFacade: UsersFacade) {
    this.displayMode='view';
    this.vm$ = this.usersFacade.vm$;
  }
  ngOnInit(): void {
    this.usersFacade.setDefaults({active:true,tenant:'test'},{topFilter:'5',filter:'',bu:''});
  }
  onTopFilterChange=(value:string)=>{
    this.usersFacade.updateTopFilter(value);
  }
  deleteUser = (user: User) => this.usersFacade.deleteUser(user);
  selectUser = (user: User) => this.usersFacade.selectUser(user);
  addUser = (user: User) => this.usersFacade.addUser(user);
}


@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    SearchUsersModule,
    UsersListModule,
    DetailsModule,
    AddUserModule,
    UpdateUserModule,
    ListViewModule
  ],
  exports: [ManageUsersComponent],
  declarations: [ManageUsersComponent],
  providers: [],
})
export class ManageUsersModule {}
