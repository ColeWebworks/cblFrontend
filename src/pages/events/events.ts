import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, ViewController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Event } from '../../models/Event';
import { Category } from '../../models/Category';
import { CreateEvent } from './create-event';
import { EventService } from '../../services/event.service';
import { EventFactory } from '../../factories/eventFactory';
@Component({
    selector: "events",
    templateUrl: 'event.html'
  })
  export class EventsPage{
    private categories:Category[];
    constructor(public navCtrl: NavController, public storage: Storage, public loadingCtrl: LoadingController, public modalCtrl: ModalController, private eventService: EventService) {

    }

    ionViewWillEnter() {
      this.getContent();
    }

    getContent() {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.eventService.getEvents( data => {
        const factory     = new EventFactory();
        this.categories   = factory.create(data.categories);
        loading.dismiss();
      });
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
