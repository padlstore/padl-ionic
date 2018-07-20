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
import { PaymentPage } from '../pages/payment/payment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { NgAisModule } from 'angular-instantsearch';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Stripe } from '@ionic-native/stripe';

import { Config } from './config';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { OffersService } from '../services/offers.service';
import { PaymentService } from '../services/payment.service';

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
    PaymentPage,
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
    PaymentPage,
    TabsPage
  ],
  providers: [
    AuthService,
    ProfileService,
    OffersService,
    PaymentService,
    StatusBar,
    SplashScreen,
    Camera,
    AngularFireAuth,
    AngularFireDatabase,
    Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
