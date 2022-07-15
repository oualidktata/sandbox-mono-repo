import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserModule } from './add-user/add-user.component';
import { EditUserComponent, EditUserModule } from './edit-user/edit-user.component';

@NgModule({
  imports: [CommonModule, AddUserModule,EditUserModule],
  exports: [AddUserModule,EditUserModule],
  declarations: [],
})
export class FeatureEditUserModule {}
