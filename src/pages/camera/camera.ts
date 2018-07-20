import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { normalizeURL, NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { CreatePage } from '../create/create';

@Component({
    templateUrl: 'camera.html'
})
export class CameraPage {
    public base64Image: string;
    public photoTaken: boolean;

    constructor(
        private camera: Camera,
        public platform: Platform,
        private navCtrl: NavController
    ) {
        this.photoTaken = false; // initially, do not display any photos as no photo was taken
    }


    ionViewDidEnter() {

        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):

            this.photoTaken = true;

            if (this.platform.is('ios'))
                this.base64Image = normalizeURL(imageData);
            else
                this.base64Image = "data:image/jpeg;base64," + imageData;

            this.navCtrl.push(CreatePage);

        }, (err) => {
            console.debug("Unable to obtain picture: " + err, "app");
            console.log(err);
        });
    }

}