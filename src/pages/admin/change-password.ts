import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, ViewController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../services/login.service';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
    selector: "change-password",
    templateUrl: 'change-password.html'
  })
  export class ChangePassword{

    constructor(public viewCtrl: ViewController, public authService: AuthService, public loadingCtrl: LoadingController) {

    }

    public dismiss() {
      this.viewCtrl.dismiss();
    }

    public changePassword() {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      //this.authService.changePassword();
    }
  }
