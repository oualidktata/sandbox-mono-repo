// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  applicationName:"User Console",
  version:'1.0.1',
  production: false,
  usersSettingsDefaults:{
    baseUsersUri:"https://my.api.mockaroo.com/users-mock.json?key=e47befb0",
      defaultTopFilter:"10",
      activeCriteria:"true",
      defaultRoleFilter:"user"
    },
  rolesSettingsDefaults:{
      defaultTopFilter:"5",
      activeCriteria:"true"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
