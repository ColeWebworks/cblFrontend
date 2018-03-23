import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { ModalController, LoadingController } from 'ionic-angular';
import { ChangePassword } from './change-password';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {
    role:string='navigators'
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public loadingCtrl: LoadingController, private storage: Storage) {

  }
  presentModal() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.storage.get('user_id').then((val) => {
      let modal = this.modalCtrl.create(ChangePassword, {userId: val});
      loading.dismiss();
      modal.present();
    });
  }
}

