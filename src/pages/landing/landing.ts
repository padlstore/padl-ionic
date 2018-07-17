import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html'
})
export class LandingPage {

    constructor(
        public navCtrl: NavController,
        public auth: AuthService
    ) {

    }

    loginTapped(event) {
        this.navCtrl.push(LoginPage, {}, {animate: true, direction: 'forward'});
    }

    registerTapped(event) {
        // this.navCtrl.push(LoginPage, {}, {animate: true, direction: 'forward'})
        this.navCtrl.push(RegisterPage, {}, {animate: true, direction: 'forward'});
    }

    skipLogin() {
        this.navCtrl.push(TabsPage);
    }
}