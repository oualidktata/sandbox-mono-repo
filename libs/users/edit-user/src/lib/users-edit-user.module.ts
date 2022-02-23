import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '@pwc/shared/material';
import { UpdateUserComponent } from './update-user/update-user.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [AddUserComponent, UpdateUserComponent],
  exports: [AddUserComponent, UpdateUserComponent],
})
export class UsersEditUserModule {}
