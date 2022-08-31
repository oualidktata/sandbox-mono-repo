import { Injectable, Optional } from '@angular/core';
import {
  ConfigurationService,
  IConfiguration,
} from '@pwc/user-console-assets/configuration';
import { SettingsBCConfig } from '../configuration/settings-bc.config';
import { IUISettings } from '../entities/ui-settings.model';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(@Optional() private configService: ConfigurationService) {
    this.configService.settings$.subscribe((settings) => {
      this.handleSettings(settings);
    });
  }
  private config!: SettingsBCConfig;

   uiSettings!: IUISettings //= {
  //   defaultDashboardFilter: 'list',
  //   allowHidingSections: false,
  //   maxCardsPerRow: 5,
  // };

  private handleSettings(settings: IConfiguration) {
    if (settings) {
      this.config = settings as SettingsBCConfig;
      if (this.config) {
        this.uiSettings = {
          defaultDashboardFilter:
            this.config?.settingsConfig?.uiDefaultDashboardFilter,
          allowHidingSections: this.config?.settingsConfig?.uiAllowHidingSections,
          maxCardsPerRow: this.config?.settingsConfig?.uiMaxCardsPerRow,
        };
      }
    }
    console.warn(`SettingService-handleSettings${JSON.stringify(this.uiSettings)}`);
  }
}
