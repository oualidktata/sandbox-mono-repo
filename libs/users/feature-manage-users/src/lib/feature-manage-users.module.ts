import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersModule } from './manage-users/manage-users.component';

@NgModule({
  imports: [CommonModule, ManageUsersModule],
  declarations: [],
  exports: [ManageUsersModule],
})
export class FeatureManageUsersModule {}
