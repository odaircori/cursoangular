import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app3';

  ngOnInit(): void {

      // Initialize Firebase
  let config = {
    apiKey: "AIzaSyCpO2mqlwgoNXhhgsDQRbzdY_g60_OjxJA",
    authDomain: "app3-angular.firebaseapp.com",
    databaseURL: "https://app3-angular.firebaseio.com",
    projectId: "app3-angular",
    storageBucket: "app3-angular.appspot.com",
    messagingSenderId: "343688560274"
  };

    firebase.initializeApp(config)
  }
}
