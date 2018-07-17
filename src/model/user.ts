import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Config } from '../app/config';


export class User {
    constructor (
        public auth: AuthService,
        public profile: ProfileService
    ) {

    }

}