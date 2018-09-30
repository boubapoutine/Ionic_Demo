import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

let clicks = 0;

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
onClick() {
clicks += 1;
document.getElementById("clicks").innerHTML = clicks;
}

}

