// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*

ID do client da Web:
874036221463-40v1dfqisia5tqtehhf2nsjuf04lam9j.apps.googleusercontent.com

Chave secreta do client da Web:
uW5hPYvR690pLo22OF81YZcO

*/

export const environment = {
  production: false,
  googleWebClientId: "...",
  firebaseConfig: {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "https://rock-bonus-247016.firebaseio.com",
    projectId: "..",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
