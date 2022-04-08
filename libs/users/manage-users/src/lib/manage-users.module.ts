import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UsersListModule } from '@pwc/users/list';
import { UsersEditUserModule } from '@pwc/users/edit-user';
import { HttpClientModule } from '@angular/common/http';
import { SharedMaterialModule } from '@pwc/shared/material';
const routes: Routes = [
  { path: 'manage', pathMatch: 'full', component: ManageUsersComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    UsersListModule,
    UsersEditUserModule,
    HttpClientModule,
  ],
  declarations: [ManageUsersComponent],
  exports: [ManageUsersComponent],
})
export class ManageUsersModule {}
