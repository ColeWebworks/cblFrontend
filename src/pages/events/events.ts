import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, ViewController, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
    selector: "attend-events",
    templateUrl: 'attend-events.html'
  })
  export class AttendEvents{

    }

    public dismiss() {
      this.viewCtrl.dismiss();
    }
  }
