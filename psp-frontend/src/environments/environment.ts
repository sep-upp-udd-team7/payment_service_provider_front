// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  paypal_service_url:"http://192.168.238.103:8000/paypal-service",
  bank_service_url:"http://192.168.238.103:8000/bank-service",
  crypto_service_url:"http://192.168.238.103:8000/crypto-service",
  auth_service_url:"http://192.168.238.103:8000/auth-service",
  psp_backend:"http://192.168.238.103:8000/",
  shopUrl:'http://192.168.238.147:4201'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
