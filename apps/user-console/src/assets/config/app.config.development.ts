import { TestEnvironmentOptions } from "@angular/core/testing";
import { IConfiguration } from "@pwc/user-console-assets/configuration";
import { IUsersConfig } from "@pwc/users/configuration";
import { UserClientSideFilters } from "@pwc/users/domain";
import { IInterestsConfig } from "libs/users/configuration/src/lib/i-interests-config";
import { IRolesConfig } from "libs/users/configuration/src/lib/i-roles-config";
import { environment } from "../../environments/environment.dev";


export class AppConfig implements IConfiguration{
  isProduction=environment.production;
  applicationName=environment.applicationName;
  version=environment.version;
  usersConfig:IUsersConfig={
    isProduction:environment.production,
    applicationName:environment.applicationName,
    version:environment.version,
    baseUri:environment.usersSettingsDefaults.baseUri,
    defaultTopFilter: environment.usersSettingsDefaults.defaultTopFilter,
    defaultRoleFilter:environment.usersSettingsDefaults.defaultRoleFilter,
    activeCriteria:environment.usersSettingsDefaults.activeCriteria,
  };
  rolesConfig:IRolesConfig={
    isProduction:environment.production,
    applicationName:environment.applicationName,
    version:environment.version,
    baseUri:environment.rolesSettingsDefaults.baseUri,
    defaultTopFilter: environment.rolesSettingsDefaults.defaultTopFilter,
    defaultTypeFilter:environment.rolesSettingsDefaults.defaultTypeFilter,
    activeCriteria:environment.rolesSettingsDefaults.activeCriteria,
  };
  interestsConfig:IInterestsConfig={
    isProduction:environment.production,
    applicationName:environment.applicationName,
    version:environment.version,
    baseUri:environment.interestsSettings.baseUri
  };
 
}