import { Component, ViewChild } from '@angular/core';
import { Slides, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-offer',
    templateUrl: 'offer.html'
})
export class OfferPage {

    @ViewChild(Slides) slides: Slides;
    contentClass: string = "";

    objectKeys = Object.keys;
    offer: any;

    priceToString(price) {
        let cents = (price % 100).toString();
        let dollars = (price / 100).toString();
        let centPadding = '0'.repeat(2 - cents.length);

        let output = '$' + dollars + '.' + centPadding + cents;
        return output;
    }

    constructor(private navParams: NavParams) {
        this.offer = navParams.get('hit')
    }

    ionViewDidLoad() {
        this.slides.ionSlideTouchEnd.subscribe(() => {
            this.enableVerticalScroll()
        })
    }

    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
    }

    disableVerticalScroll() {
        this.contentClass = "no-scroll"
    }

    enableVerticalScroll() {
        this.contentClass = ""
    }

}
