import { Component } from '@angular/core';
import { Nav, NavController, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public storage: Storage, public authService: AuthService, public events:Events) {
    console.log('View loaded');
  }

  ionViewWillEnter() {
    console.log('View will enter');
  }
}
