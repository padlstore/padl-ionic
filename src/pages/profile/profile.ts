import { Component, ViewChild, ElementRef } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    @ViewChild('profilePic', {read: ElementRef}) propic: ElementRef;

    constructor(public profileService: ProfileService) {
        
    }

    public updateProfilePic(): void {
        this.profileService.getProfile().subscribe(data => {
            this.propic.nativeElement.textContent = data.propic;
        })
    }

    ionViewDidLoad(): void {
        console.log('View loaded into memory')
        this.updateProfilePic()
    }

    ionViewWillEnter(): void {
        this.updateProfilePic()
    }

}