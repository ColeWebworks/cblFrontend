import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';


@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {
    role:string='navigators'
  constructor(public navCtrl: NavController) {

  }

}
