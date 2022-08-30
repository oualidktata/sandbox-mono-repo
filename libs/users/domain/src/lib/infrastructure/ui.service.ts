import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import {
  ConfigurationService,
  IConfiguration,
} from '@pwc/user-console-assets/configuration';
import { UsersBCConfig } from '../configuration/users-bc.config';

@Injectable({ providedIn: 'root' })
export class UIService {
  private config!: UsersBCConfig;

  showNotificationSection = false;

  constructor(
    @Optional() public configService: ConfigurationService,
    private http: HttpClient
  ) {
    this.configService.settings$.subscribe((settings) => {
      this.handleSettings(settings);
    });
  }
  handleSettings(settings: IConfiguration) {
    if (settings) {
      this.config = settings as UsersBCConfig;
      this.showNotificationSection =
        this.config?.usersConfig?.showNotificationSection;
      console.log(`UserService-handleSettings${JSON.stringify(this.config)}`);
    }
  }
}
