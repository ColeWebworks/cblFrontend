import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, ViewController, LoadingController } from 'ionic-angular';

@Component({
    selector: "create-event",
    templateUrl: 'create-event.html'
  })
  export class createEvent{
    constructor(public viewCtrl: ViewController, public loadingCtrl: LoadingController) {

    }

    public dismiss() {
      this.viewCtrl.dismiss();
    }
  }
