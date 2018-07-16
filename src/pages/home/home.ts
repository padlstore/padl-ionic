import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfferPage } from '../offer/offer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  itemTapped(event, item) {
    console.log(item.name);

    this.navCtrl.push(OfferPage, {
      hit: item
    });
  }

}
