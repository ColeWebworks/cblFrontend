import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { ReadyState } from '@angular/http';
import { LoginPage } from '../login/login';
import { EventsPage } from '../Events/events';
import { AdminPage } from '../admin/admin';
import { AuthService } from '../../services/login.service';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userToken;
  ld:Loading;

  constructor(public navCtrl: NavController, public storage: Storage, public loadingCtrl: LoadingController, public authService: AuthService, public events:Events) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    console.log('View loaded');
    this.ld = loading;

    this.events.subscribe('user:authenticated', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user.role.name, 'at', time);
      if(user.role.id === 1) {
        this.navCtrl.push(AdminPage);
      }
      else {
        this.navCtrl.push(EventsPage);
      }
      this.ld.dismiss();
    });
    this.events.subscribe('user:unauthenticated', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.navCtrl.push(LoginPage);
      this.ld.dismiss();
    });
  }

  ionViewWillEnter() {
    console.log('View will enter');
  }
}
