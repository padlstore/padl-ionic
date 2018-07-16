import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
    selector: 'page-offer',
    templateUrl: 'offer.html'
})
export class OfferPage {

    @ViewChild(Slides) slides: Slides;

    contentClass: string = "";

    imgs: string[] = ["https://s3.amazonaws.com/padl.storage1/profile_pictures/dog.png",
        "https://s3.amazonaws.com/padl.storage1/profile_pictures/cat.jpg",
        "https://s3.amazonaws.com/padl.storage1/profile_pictures/dolphin.jpg"];

    constructor() {

    }

    ionViewDidLoad() {
        this.slides.ionSlideTouchEnd.subscribe(() => {
            this.enableVerticalScroll()
        })
    }

    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        // console.log('Slide changed. Current index is:', currentIndex);
    }

    disableVerticalScroll() {
        this.contentClass = "no-scroll"
    }

    enableVerticalScroll() {
        this.contentClass = ""
        // console.log("Re-enabling vertical scroll")
    }

}
