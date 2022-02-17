// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  get_users: 'https://reqres.in/api/users?page=1',
  get_selected_user: 'https://reqres.in/api/users/',
  update_selected_user: 'https://reqres.in/api/users/',
  delete_selected_user: 'https://reqres.in/api/users/',
  add_user: 'https://reqres.in/api/users',
  validate_user: 'https://reqres.in/api/login',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
