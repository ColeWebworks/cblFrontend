import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, ViewController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Event } from '../../models/Event';
import { CreateEvent } from './create-event'
@Component({
    selector: "events",
    templateUrl: 'event.html'
  })
  export class EventsPage{
    constructor(public navCtrl: NavController, public storage: Storage, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {

    }
    presentModal() {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.storage.get('user_id').then((val) => {
        let modal = this.modalCtrl.create(CreateEvent);
        loading.dismiss();
        modal.present();
      });
    }
  }
