import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgSwitch, NgSwitchDefault,NgSwitchCase} from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, ViewController, LoadingController } from 'ionic-angular';
import { EventService } from '../../services/event.service';
import { Category } from '../../models/Category';
import { CategoryFactory } from '../../factories/categoryFactory';

@Component({
    selector: "create-event",
    templateUrl: 'create-event.html'
  })
  export class CreateEvent{
    categories: Category[];
    constructor(public viewCtrl: ViewController, public loadingCtrl: LoadingController, private eventService: EventService ) {

    }

    ionViewDidEnter() {
      console.log(this.eventService);
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.eventService.getCategories(data => {
        const categoryFactory = new CategoryFactory();
        this.categories = categoryFactory.create(data.categories);
        loading.dismiss();
      });
    }

    public dismiss() {
      this.viewCtrl.dismiss();
    }
    createEvent(name:string, location:string, start:string, end:string, details:string, category:string[]){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      let postData = {
        name, location, start, end, details, category
      };
      this.eventService.postEvent(postData,data =>{
        console.log(data);
        loading.dismiss();
      })
    }
  }
