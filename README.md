# Padl Ionic

Cordova Plugins Installed:
* `npm install --save @ionic-native/firebase`
* `ionic cordova plugin add cordova-plugin-firebase`
* `npm install --save @ionic-native/camera`
* `ionic cordova plugin add cordova-plugin-camera`
* `npm install --save instantsearch.js`

Commands for testing:
* `ionic cordova build ios`
* `ionic cordova emulate ios`


Find current version of Angular in `package.json`

## Common Errors

### "Failed to install the requested application"
* Make sure that the directory you are in is correctly, case-sensitive. MacOS is case-insensitive, but Ionic is.

### Page transition animations not working
* Check to make sure all the tags in the HTML source are correctly matched and closed.