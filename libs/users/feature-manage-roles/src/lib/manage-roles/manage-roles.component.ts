import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { AddRoleModule } from '../add-role/add-role.component';

@Component({
  selector: 'pwc-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageRolesComponent {
  constructor() {}
}
@NgModule({
  imports: [AddRoleModule],
  exports: [ManageRolesComponent],
  declarations: [ManageRolesComponent],
  providers: [],
})
export class ManageRolesModule { }

