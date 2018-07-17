import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    email: string;
    password: string;

    constructor(
        private navCtrl: NavController,
        public auth: AuthService,
        private toastCtrl: ToastController) {

    }

    presentToast(message) {
        const toast = this.toastCtrl.create({
            message: message,
            position: 'top',
            duration: 3000
        });
        toast.present();
    }

    loginTapped(event) {
        console.log(this.email + '/' + this.password);
        this.auth.signInWithEmail({
            email: this.email,
            password: this.password
        })
        .then(value => {
            console.log("You've logged in as:", this.auth.getId());
            this.navCtrl.push(TabsPage);
        })
        .catch(err => {
            console.log('Something went wrong:', err.message);
            this.presentToast(err.message);
        });
    }

}