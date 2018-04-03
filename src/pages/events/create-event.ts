import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, ViewController, LoadingController } from 'ionic-angular';
import { EventService } from '../../services/event.service';
@Component({
    selector: "create-event",
    templateUrl: 'create-event.html'
  })
  export class CreateEvent{
    constructor(public viewCtrl: ViewController, public loadingCtrl: LoadingController, private eventService: EventService ) {

    }

    public dismiss() {
      this.viewCtrl.dismiss();
    }
    createEvent(name:string, location:string, start:string, end:string, details:string){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      let postData = {
        name, location, start, end, details
      };
      this.eventService.postEvent(postData,data =>{
        console.log(data);
        loading.dismiss();
      })
    }
  }
