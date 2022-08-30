import { Injectable } from '@angular/core';
import { IConfiguration } from '@pwc/user-console-assets/configuration';
import { IUsersBCConfig } from './i-users-bc.config';


//import { IConfiguration } from '@pwc/user-console-assets/configuration';
//import { IRolesConfig } from './i-roles-config';
//import { IInterestsConfig } from './i-interests-config';

@Injectable()
export class UsersBCConfig implements IConfiguration {

  applicationName!: string;
  version!: string;
  isProduction!: boolean;
  usersConfig!:IUsersBCConfig;
  //baseUri!:string;

  //Users config section
  // baseUri!: string;
  // defaultTopFilter!: string;
  // activeCriteria!: boolean;
  // defaultRoleFilter!: string;
  // showNotificationSection!: boolean;
  // //Roles config section
  // defaultTypeFilter!: string;
}
