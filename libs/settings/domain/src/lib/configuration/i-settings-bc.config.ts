export interface ISettingsBCConfig {
  //from parent app
  applicationName: string;
  isProduction:boolean;
  version:string;
  //specific to Settings Bounded context
  baseUri: string;
  uiDefaultDashboardFilter: string;
  uiAllowHidingSections: boolean;
  uiMaxCardsPerRow: number;
}
