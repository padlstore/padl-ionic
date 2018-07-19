import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
    private user: firebase.User;

    constructor(public afAuth: AngularFireAuth) {
        afAuth.authState.subscribe(user => {
            this.user = user;
        })
    }

    signInWithEmail(credentials) {
        console.log('Signing in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        );
    }

    get authenticated(): boolean {
        return this.user !== null;
    }

    getEmail() {
        return this.user && this.user.email;
    }

    getId() {
        return this.user && this.user.uid;
    }

    async getToken() {
        if (this.user) {
            try {
                let token = await this.user.getIdToken();
                return token;
            } catch (err) {
                console.log("Couldn't get user token");
                return false;
            }
        }
        return false;
    }

    getName() {
        return this.user && this.user.displayName;
    }

    signOut(): Promise<void> {
        return this.afAuth.auth.signOut();
    }
}
