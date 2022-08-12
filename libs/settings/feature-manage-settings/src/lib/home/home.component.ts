import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IImageSettings, ImageCardComponent } from '@pwc/image-card';
import {
  EditAdminEmailNotificationsModule,
  ViewAdminEmailNotificationsModule,
} from '@pwc/settings/feature-admin-email-notifications';
import {
  EditEndUserSupportModule,
  ViewEndUserSupportModule,
} from '@pwc/settings/feature-end-user-support';
import { EditOrganizationSettingModule } from '@pwc/settings/feature-organization-settings';

@Component({
  selector: 'pwc-settings-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  imageSettings: IImageSettings = {
    source: './assets/settings/default-setting.png',
    height: 200,
    width: 400,
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditOrganizationSettingModule,
    EditAdminEmailNotificationsModule,
    ViewAdminEmailNotificationsModule,
    EditEndUserSupportModule,
    ViewEndUserSupportModule,
    ImageCardComponent,
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
