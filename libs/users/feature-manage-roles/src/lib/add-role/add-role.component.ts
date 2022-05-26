import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';

@Component({
  selector: 'pwc-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRoleComponent {
  constructor() {}
}
@NgModule({
  imports: [],
  exports: [AddRoleComponent],
  declarations: [AddRoleComponent],
  providers: [],
})
export class AddRoleModule { }

