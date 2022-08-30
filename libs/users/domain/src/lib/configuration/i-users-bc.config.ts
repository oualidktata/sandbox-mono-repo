export interface IUsersBCConfig {
  applicationName: string;
  isProduction: boolean;
  version: string;

  baseUri: string;
  defaultTopFilter: string;
  activeCriteria: boolean;
  defaultRoleFilter: string;
  showNotificationSection: boolean;
}
