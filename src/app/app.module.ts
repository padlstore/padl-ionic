import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Padl)
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
