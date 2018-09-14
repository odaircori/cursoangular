import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecletica';

  constructor(){}

  ngOnInit() {

    //Inicia o SDK do Firebase
    let config = {
      apiKey: "AIzaSyDssyYuaHqn07xKvLf9TPYETHPo0UjbjKg",
      authDomain: "ecletica-14a26.firebaseapp.com",
      databaseURL: "https://ecletica-14a26.firebaseio.com",
      projectId: "ecletica-14a26",
      storageBucket: "ecletica-14a26.appspot.com",
      messagingSenderId: "892981143217"
    };
    firebase.initializeApp(config);

 
  }


}
