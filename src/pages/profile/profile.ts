import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { OffersService } from '../../services/offers.service';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    @ViewChild('profilePic', {read: ElementRef}) propic: ElementRef;
    @ViewChild('profileOfferSellingRow', {read: ElementRef}) bought: ElementRef;
    @ViewChild('profileName', {read: ElementRef}) username: ElementRef;
    @ViewChild('profileRating', {read: ElementRef}) rating: ElementRef;

    constructor(
        public profileService: ProfileService,
        private renderer: Renderer2,
        public offersService: OffersService
    ) {
        
    }

    public updateUserName(): void {
        this.profileService.getProfile().subscribe(data => {
            // this.username.nativeElement.textContent = data.displayName;
            // this.renderer.(this.username.nativeElement, data.displayName);
        })
    }

    public updateProfilePic(): void {
        this.profileService.getProfile().subscribe(data => {
            console.log("profile pic", data.propic);
            this.renderer.setProperty(this.propic.nativeElement, "src", data.propic);
        })
    }

    public updatePurchases(): void {
        this.profileService.getProfile().subscribe(data => {
            let offersToReq = {}
            for (let key in data.offers) {
                offersToReq[key] = 'placeholder';
            }

            this.offersService.getOffers(offersToReq).subscribe(resp => {
                this.addOffersToDOM(resp.data, this.bought);
            });

        }, error => {
            console.log(JSON.stringify(error, null, 4));
        })
    }

    private addOffersToDOM(response, element: ElementRef) {
        for (let key in response) {
            console.log('adding offer to DOM:', key);
            let item = this.renderer.createElement('ion-col');
            this.renderer.setAttribute(item, 'col-3', 'true');
            console.log(response[key]['pictures']['0'])
            this.renderer.setStyle(item, 'backgroundImage', `url(${response[key]['pictures']['0']})`);
            this.renderer.setStyle(item, 'backgroundSize', 'contain');
            this.renderer.setStyle(item, 'backgroundRepeat', 'no-repeat');
            this.renderer.appendChild(element.nativeElement, item);
        }
    }

    public updateProfile(): void {
        this.updateUserName();
        this.updateProfilePic();
        this.updatePurchases();
    }

    ionViewDidLoad(): void {
        this.updateProfile();
    }

    ionViewWillEnter(): void {

    }

}