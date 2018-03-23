import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ReadyState } from '@angular/http';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/login.service';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userToken;

  constructor(public navCtrl: NavController, public storage: Storage, public loadingCtrl: LoadingController, public authService: AuthService, public events:Events) {

  }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.events.subscribe('user:authenticated', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user, 'at', time);
      loading.dismiss();
    });
    this.events.subscribe('user:unauthenticated', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.navCtrl.push(LoginPage);
      loading.dismiss();
    });
  }
}
