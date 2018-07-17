import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';

import { LandingPage } from '../pages/landing/landing';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})

export class Padl {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen, private auth: AuthService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.initializeApp();
    });
  }

  initializeApp() {
    // Sign the user in if they are already authenticated.
    this.auth.afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LandingPage;
      }
    }, () => {
      this.rootPage = LandingPage;
    });
  }
}
