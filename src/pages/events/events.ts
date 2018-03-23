import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, ViewController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: "events",
    templateUrl: 'event.html'
  })
  export class EventsPage{
    constructor(public navCtrl: NavController, public storage: Storage, public loadingCtrl: LoadingController) {

    }
  }
