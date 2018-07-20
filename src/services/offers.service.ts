import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { Config } from '../app/config';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';


@Injectable()
export class OffersService {

    userToken: any;
    OFFER_URL = `${Config.SERVER_URL}/offers/offers`;
    
    constructor(
        private http: Http,
        private auth: AuthService
    ) {
        this.userToken = this.auth.getToken();
    }

    public getOffers(offersDict): Observable<any> {
        return this.http.post(this.OFFER_URL, {
            offerList: JSON.stringify(offersDict)
        }).map(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                console.log('Not 200');
                return response.json();
            }
        }).catch(err => {
            return Observable.throw(new Error(err.status));
        });
    }
}