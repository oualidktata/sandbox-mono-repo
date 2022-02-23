import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SharedMaterialModule } from '@pwc/shared/material';
//import { UsersEditUserModule } from '@pwc/users/edit-user';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    HttpClientModule,
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class UsersListModule {}
