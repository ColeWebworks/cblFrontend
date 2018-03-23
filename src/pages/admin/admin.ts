import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { ModalController, LoadingController } from 'ionic-angular';
import { ChangePassword } from './change-password';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {
    role:string='navigators'
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public loadingCtrl: LoadingController, private nativeStorage: NativeStorage) {

  }
  presentModal() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.nativeStorage.getItem('user_id').then((data) => {
      let modal = this.modalCtrl.create(ChangePassword, {userId: data.value});
      loading.dismiss();
      modal.present();
    });
  }
}

