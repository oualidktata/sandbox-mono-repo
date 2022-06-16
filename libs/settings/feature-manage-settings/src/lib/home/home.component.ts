import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAdminEmailNotificationsModule,ViewAdminEmailNotificationsModule } from '@pwc/settings/feature-admin-email-notifications';
import { EditEndUserSupportModule,ViewEndUserSupportModule } from '@pwc/settings/feature-end-user-support';
import { EditOrganizationSettingModule } from '@pwc/settings/feature-organization-settings';

@Component({
  selector: 'pwc-settings-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditOrganizationSettingModule,
    EditAdminEmailNotificationsModule,
    ViewAdminEmailNotificationsModule,
    EditEndUserSupportModule,
    ViewEndUserSupportModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
