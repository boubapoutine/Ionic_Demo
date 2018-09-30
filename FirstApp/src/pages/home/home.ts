import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

//let clicks = 0;

export class HomePage {

  public currentCount = 0; 

    public incrementCounter() { 
     this.currentCount++; 
    }

  constructor(public navCtrl: NavController) {

  }
  

}

