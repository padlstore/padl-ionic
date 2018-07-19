import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Config } from '../../app/config';
import { PaymentService } from '../../services/payment.service';

declare var Stripe;

@Component({
    selector: 'page-payment',
    templateUrl: 'payment.html'
})
export class PaymentPage {

    offer: any; // The offer that this payment is for
    stripe = Stripe(Config.STRIPE_PUBLISHABLE_KEY);
    card: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private paymentService: PaymentService
    ) {
        this.offer = navParams.get('offer');
    }

    ionViewDidLoad() {
        this.paymentService.getUserToken();
        this.setupStripe();
    }

    attemptCharge(token): void {
        this.paymentService.chargeOffer(this.offer.offerId, token).subscribe(result => {
            if (result.success === true) {
                console.log("Success!");
            } else {
                console.log("Failed.");
            }
            console.log(JSON.stringify(result));
        });
    }

    attemptPurchase(token): void {
        // Send post requests payment.service.ts (first for purchase, then for charge)
        this.paymentService.purchaseOffer(this.offer.offerId).subscribe(result => {
            if (result.success === true) {
                this.attemptCharge(token);
            } else { // Purchase failed
                console.log('Purchase failed:', JSON.stringify(result));
            }
        });
    }

    setupStripe(): void {
        let elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };

        this.card = elements.create('card', { style: style });
        this.card.mount('#card-element');
        
        this.card.addEventListener('change', event => {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });

        var form = document.getElementById('payment-form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            this.stripe.createToken(this.card).then(result => {
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                } else {
                    console.log(`${new Date()} Created Token: ${JSON.stringify(result.token)}`);
                    this.attemptPurchase(result.token);
                }
            });
        });
    }
}