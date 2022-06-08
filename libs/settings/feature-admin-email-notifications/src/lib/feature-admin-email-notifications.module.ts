import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAdminEmailNotificationsModule } from './view-admin-email-notifications/view-admin-email-notifications.component';
import { EditAdminEmailNotificationsModule } from './edit-admin-email-notifications/edit-admin-email-notifications.component';

@NgModule({
  imports: [CommonModule,EditAdminEmailNotificationsModule,ViewAdminEmailNotificationsModule],
  declarations: [
  ],
})
export class FeatureAdminEmailNotificationsModule {}
