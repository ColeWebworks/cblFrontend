import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { ModalController } from 'ionic-angular';
import { ChangePassword } from './change-password';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {
    role:string='navigators'
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  presentModal() {
    let modal = this.modalCtrl.create(ChangePassword);
    modal.present();
  }
}

