import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UsersListModule } from '@pwc/users/list';
import { AddUserComponent, UsersEditUserModule } from '@pwc/users/edit-user';
const routes: Routes = [
  { path: 'manage', pathMatch: 'full', component: ManageUsersComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UsersListModule,
    UsersEditUserModule,
  ],
  declarations: [ManageUsersComponent],
  exports: [ManageUsersComponent],
})
export class ManageUsersModule {}
