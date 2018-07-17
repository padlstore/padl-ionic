# Padl Ionic

## (Ionic Native) Cordova Plugins Installed
### Firebase
* `npm install --save @ionic-native/firebase`
* `ionic cordova plugin add cordova-plugin-firebase`
### Camera
* `npm install --save @ionic-native/camera`
* `ionic cordova plugin add cordova-plugin-camera`
### Statusbar
* `ionic cordova plugin add cordova-plugin-advanced-http`
### HTTP
* `npm install --save @ionic-native/http`
* `ionic cordova plugin add cordova-plugin-advanced-http`
### Algolia InstantSearch
* `npm install --save angular-instantsearch`

## Commands for testing
* `ionic cordova build ios`
* `ionic cordova emulate ios`

## Additional Tips
* Find current version of Angular in `package.json` as `@angular/core`

## Common Errors

### "Failed to install the requested application"
* Make sure that the directory you are in is correctly, case-sensitive. MacOS is case-insensitive, but Ionic is.

### Page transition animations not working
* Check to make sure all the tags in the HTML source are correctly matched and closed.

### Cannot find module "."
* The auto import feature VSCode probably tried to import `angular-core` via `../../../node_modules`; that doesn't work. Need to import via `angular-core`.

### `RunTime Error: Network Error`
* If the error has to do with polyfills, try adding `<allow-navigation href="*">` to `config.xml`.