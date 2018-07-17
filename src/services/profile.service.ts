import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from '../../node_modules/rxjs';
import { Config } from '../app/config';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {
    private profile: any;
    private observable: Observable<any>;
    private userInfoURL: string;
    
    constructor(
        private auth: AuthService,
        private http: Http
    ) {
        this.userInfoURL = `${Config.SERVER_URL}/users/${this.auth.getId()}`;
    }

    public getProfile(): Observable<any> {
        if (this.profile) {
            return Observable.of(this.profile);
        } else if (this.observable) { // request in progress
            return this.observable;
        } else {
            console.log('running get request')
            this.observable = this.http.get(this.userInfoURL, {}).map(
                response => {
                    this.observable = null;

                    if (response.status == 200) {
                        this.profile = response.json();
                        console.log(this.profile)
                    }

                    return this.profile;
                }
            ).share();
            return this.observable;
        }
    }
}