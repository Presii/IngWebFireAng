import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule,AuthProviders, AuthMethods } from 'angularfire2';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

export const config = {
    apiKey: "AIzaSyDHh-3wSCRsfwRDuJ_uMpaiyAu0iRJ8wbs",
    authDomain: "ingweb-148904.firebaseapp.com",
    databaseURL: "https://ingweb-148904.firebaseio.com",
    storageBucket: "ingweb-148904.appspot.com",
    messagingSenderId: "159362007228"
  };
  export const myFirebaseAuthConfig  = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
  };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config,myFirebaseAuthConfig),
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
