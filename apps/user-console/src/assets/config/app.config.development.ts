//import { TestEnvironmentOptions } from "@angular/core/testing";
import { IConfiguration } from "@pwc/user-console-assets/configuration";

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { IUsersBCConfig } from "@pwc/users/domain";
import {ISettingsBCConfig} from "@pwc/settings/domain"

import { environment } from "../../environments/environment.dev";


export class AppConfig implements IConfiguration{
  isProduction=environment.production;
  applicationName=environment.applicationName;
  version=environment.version;
  // 3 sets of configs from Users-BC
  usersConfig:IUsersBCConfig={
    isProduction:environment.production,
    applicationName:environment.applicationName,
    version:environment.version,
    baseUri:environment.usersSettingsDefaults.baseUri,
    defaultTopFilter: environment.usersSettingsDefaults.defaultTopFilter,
    defaultRoleFilter:environment.usersSettingsDefaults.defaultRoleFilter,
    activeCriteria:environment.usersSettingsDefaults.activeCriteria,
    showNotificationSection:environment.usersSettingsDefaults.showNotificationSection
  };
  SettingsConfig:ISettingsBCConfig={
    isProduction:environment.production,
    applicationName:environment.applicationName,
    version:environment.version,
    baseUri:environment.settingsDefaults.baseUri,

    uiDefaultDashboardFilter:environment.settingsDefaults.uiDefaultDashboardFilter,
    uiAllowHidingSections:environment.settingsDefaults.uiAllowHidingSections,
    uiMaxCardsPerRow:environment.settingsDefaults.uiMaxCardsPerRow
  };


  // rolesConfig:ISettingsBCConfig={
  //   isProduction:environment.production,
  //   applicationName:environment.applicationName,
  //   version:environment.version,
  //   baseUri:environment.rolesSettingsDefaults.baseUri,
  //   defaultTopFilter: environment.rolesSettingsDefaults.defaultTopFilter,
  //   defaultTypeFilter:environment.rolesSettingsDefaults.defaultTypeFilter,
  //   activeCriteria:environment.rolesSettingsDefaults.activeCriteria,
  // };
  // interestsConfig:IInterestsConfig={
  //   isProduction:environment.production,
  //   applicationName:environment.applicationName,
  //   version:environment.version,
  //   baseUri:environment.interestsSettings.baseUri
  // };

}
