import { Injectable } from '@angular/core';
import { IConfiguration } from '@pwc/user-console-assets/configuration';
import { IRolesConfig } from './i-roles-config';
import { IInterestsConfig } from './i-interests-config';
import { IUsersConfig } from './i-users-config';


@Injectable()
export class UsersLibraryConfiguration implements IConfiguration
{
  isProduction!: boolean;
  applicationName!: string;
  version!: string;
  //specific to users Lib
  usersConfig!:IUsersConfig;
  rolesConfig!:IRolesConfig;
  interestsConfig!:IInterestsConfig;
}
