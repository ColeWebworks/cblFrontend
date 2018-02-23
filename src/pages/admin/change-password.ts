import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AuthService } from '../../services/login.service';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
    selector: "change-password",
    templateUrl: 'change-password.html'
  })
  export class ChangePassword{
  }