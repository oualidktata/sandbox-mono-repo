import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureAdminEmailNotificationsModule } from 'libs/settings/feature-admin-email-notifications/src';
import { FeatureEndUserSupportModule } from 'libs/settings/feature-end-user-support/src';
import { OrganizationSettingModule } from '../organization-setting/organization-setting.component';

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
    OrganizationSettingModule,
    FeatureEndUserSupportModule,
    FeatureAdminEmailNotificationsModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
