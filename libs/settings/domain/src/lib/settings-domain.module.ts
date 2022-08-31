import { NgModule } from '@angular/core';
import { ConfigurationModule } from '@pwc/user-console-assets/configuration';
import { SettingsService } from './infrastructure/settings.service';

@NgModule({
  imports: [ConfigurationModule],
  providers:[SettingsService]
})
export class SettingsDomainModule { }
