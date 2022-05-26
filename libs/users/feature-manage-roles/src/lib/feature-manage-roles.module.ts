import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoleModule } from './add-role/add-role.component';
import { ManageRolesModule } from './manage-roles/manage-roles.component';

@NgModule({
  imports: [CommonModule, ManageRolesModule, AddRoleModule],
  declarations: [],
  exports: [ManageRolesModule],
})
export class FeatureManageRolesModule {}
