import { Component, ViewChild } from '@angular/core'
import { Slides, NavParams, NavController } from 'ionic-angular'
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'page-create',
    templateUrl: 'create.html'
})
export class CreatePage {

    @ViewChild(Slides) slides: Slides
    contentClass: string = ""

    constructor(
        private navParams: NavParams,
        private navCtrl: NavController,
        private auth: AuthService
    ) { }

    priceToString(price) {
        price = Math.round(price * 100.0) / 100.0
        let cents = (price % 100).toString()
        let dollars = (price / 100).toString()
        let centPadding = '0'.repeat(2 - cents.length)

        let output = '$' + dollars + '.' + centPadding + cents
        return output
    }

    ionViewDidLoad() {
        this.slides.ionSlideTouchEnd.subscribe(() => {
            this.enableVerticalScroll()
        })
    }

    disableVerticalScroll() {
        this.contentClass = 'no-scroll'
    }

    enableVerticalScroll() {
        this.contentClass = ''
    }

    postTapped(): void {
        console.log('post tapped');
    }
}