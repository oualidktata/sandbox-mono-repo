import { NgModule } from '@angular/core';
import { FeatureAdminEmailNotificationsModule } from 'libs/settings/feature-admin-email-notifications/src';
import { FeatureEndUserSupportModule } from 'libs/settings/feature-end-user-support/src';
import { HomeModule } from './home/home.component';

@NgModule({
  imports: [HomeModule,FeatureEndUserSupportModule,FeatureAdminEmailNotificationsModule],
  declarations: [],
  exports: [HomeModule],
})
export class FeatureManageSettingsModule {}
