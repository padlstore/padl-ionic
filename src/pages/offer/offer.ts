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
        let output = '$' + (price / 100).toString() + '.' + (price % 100).toString().padStart(2, '0');
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
