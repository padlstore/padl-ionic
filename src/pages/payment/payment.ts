import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
import { Config } from '../../app/config';

@Component({
    selector: 'page-payment',
    templateUrl: 'payment.html'
})
export class PaymentPage {

    cardNumber: string;
    cardMonth: number;
    cardYear: number;
    cardCVV: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public stripe: Stripe
    ) { }

    ionViewDidLoad() {
        this.stripe.setPublishableKey(Config.STRIPE_PUBLISHABLE_KEY);
    }

    handleToken(token): void {
        console.log(token);
    }

    handleError(error): void {
        console.log(error);
    }

    validateCard() {
        let card = {
            number: this.cardNumber,
            expMonth: this.cardMonth,
            expYear: this.cardYear,
            cvc: this.cardCVV
        };

        this.stripe.createCardToken(card)
            .then(token => this.handleToken(token))
            .catch(error => this.handleError(error));
    }
}