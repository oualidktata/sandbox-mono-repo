import { IConfiguration } from "@pwc/user-console-assets/configuration";
import { ISettingsBCConfig } from "./i-settings-bc.config";

export class SettingsBCConfig implements IConfiguration {
  applicationName!: string;
  version!: string;
  isProduction!: boolean;

  settingsConfig!:ISettingsBCConfig;
}
