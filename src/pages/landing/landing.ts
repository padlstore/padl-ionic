import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html'
})
export class LandingPage {

    constructor(public navCtrl: NavController) {

    }

    loginTapped(event) {
        this.navCtrl.push(LoginPage, {}, {animate: true, direction: 'forward'})
    }

    registerTapped(event) {
        // this.navCtrl.push(LoginPage, {}, {animate: true, direction: 'forward'})
        this.navCtrl.push(RegisterPage, {}, {animate: true, direction: 'forward'})
    }
}