import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Padl } from './app.component';

import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { MessagesPage } from '../pages/messages/messages';
import { CameraPage } from '../pages/camera/camera';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { OfferPage } from '../pages/offer/offer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { NgAisModule } from 'angular-instantsearch';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Config } from './config';

import { AuthService } from '../services/auth.service'
import { ProfileService } from '../services/profile.service'

@NgModule({
  declarations: [
    Padl,
    LandingPage,
    LoginPage,
    RegisterPage,
    HomePage,
    MessagesPage,
    CameraPage,
    NotificationsPage,
    ProfilePage,
    OfferPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(Padl),
    NgAisModule.forRoot(),
    AngularFireModule.initializeApp(Config.firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Padl,
    LandingPage,
    LoginPage,
    RegisterPage,
    HomePage,
    MessagesPage,
    CameraPage,
    NotificationsPage,
    ProfilePage,
    OfferPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    ProfileService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
