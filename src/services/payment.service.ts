import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { Config } from '../app/config';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class PaymentService {

    OFFER_URL = `${Config.SERVER_URL}/offers/`;
    userToken: any;
    
    constructor(
        private http: Http,
        private auth: AuthService
    ) { }

    async getUserToken() {
        this.userToken = await this.auth.getToken();
    }

    public purchaseOffer(offerId): Observable<any> {
        if (this.userToken) {
            return this.http.post(this.OFFER_URL + offerId + '/purchase', {
                userToken: this.userToken
            }).map(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    console.log('Not 200');
                    return response.json();
                }
            }).catch(err => {
                console.log(err)
                console.log(JSON.stringify(err))
                return Observable.throw(new Error(err.status));
            });
        } else  {
            return Observable.of({
                success: false
            })
        }
    }

    public chargeOffer(offerId, token): Observable<any> {
        if (this.userToken) {
            return this.http.post(this.OFFER_URL + offerId + '/charge', {
                userToken: this.userToken,
                source: token.id
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
        } else  {
            return Observable.of({
                success: false
            })
        }
    }
}