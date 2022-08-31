import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IImageSettings, ImageCardComponent } from '@pwc/image-card';
import { SettingsDomainModule } from '@pwc/settings/domain';
import {
  EditAdminEmailNotificationsModule,
  ViewAdminEmailNotificationsModule,
} from '@pwc/settings/feature-admin-email-notifications';
import {
  EditEndUserSupportModule,
  ViewEndUserSupportModule,
} from '@pwc/settings/feature-end-user-support';
import { EditUiSettingsComponent, ViewUiSettingsComponent } from '@pwc/settings/feature-manage-ui-settings';
import { EditOrganizationSettingModule } from '@pwc/settings/feature-organization-settings';
import { SettingsService } from 'libs/settings/domain/src/lib/infrastructure/settings.service';

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

  maxCards:number=10;
  constructor(private settingsService: SettingsService) {
    if (this.settingsService.uiSettings){
      this.maxCards=this.settingsService?.uiSettings?.maxCardsPerRow??7;
  }
  console.log(`HomeComponent.config-${JSON.stringify(this.settingsService.uiSettings)}`);
  }

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
    SettingsDomainModule,
    EditUiSettingsComponent,
    ViewUiSettingsComponent
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
