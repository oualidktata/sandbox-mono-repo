import { NgModule } from '@angular/core';
import {
  ConfigurationModule,
} from '@pwc/user-console-assets/configuration';
import { UsersFacade } from './application/users.facade';

@NgModule({
  imports: [ConfigurationModule],
  declarations: [],
  providers: [UsersFacade],
})
export class UsersDomainModule {}
