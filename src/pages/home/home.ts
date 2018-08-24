import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { BacProvider } from '../../providers/bac/bac';
import { BAC } from '../../models/bac.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ouncesConsumed: number
  percentAlcohol: number
  weightLbs: number
  hours : number
  localBAC: BAC
  isSubmitted: boolean = false

  constructor(public navCtrl: NavController, private bacProvider: BacProvider) {
  }

  calculateLocalBac(){
    this.localBAC = this.bacProvider.calculateBAC(this.ouncesConsumed, this.percentAlcohol, this.weightLbs, this.hours);
    this.isSubmitted = true;
    console.log(this.localBAC);
  }
}
