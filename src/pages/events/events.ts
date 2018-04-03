import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, Slides } from 'ionic-angular';
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
    @ViewChild(Slides) slides: Slides;

    public selectedCategory: Category;
    public showLeftButton: boolean;
    public showRightButton: boolean;
    private fullCategories:Category[];
    private categories:Category[];
    constructor(public navCtrl: NavController, public storage: Storage, public loadingCtrl: LoadingController, public modalCtrl: ModalController, private eventService: EventService) {

    }

    ionViewWillEnter() {
      //this.getContent();
      this.categories = [];
      this.showEvents(0);
    }

    getContent() {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.eventService.getEvents( data => {
        const factory     = new EventFactory();
        this.categories   = factory.create(data.categories);
        this.fullCategories = this.categories.slice(0);
        this.initializeCategories();
        loading.dismiss();
      });
    }

    showEvents(categoryId:number) {
      console.log(categoryId);
      if(this.categories.length < 1) {
        this.getContent();
        return;
      }

      if(categoryId == 0) {
        this.categories = this.fullCategories;
        return;
      }
      else {
        this.fullCategories.forEach(cat => {
          console.log(cat.id);
          if(cat.id == categoryId) {
            this.categories = [cat];
            return;
          }
        });
      }
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

    private initializeCategories(): void {

      // Select it by defaut
      this.selectedCategory = this.categories[0];

      // Check which arrows should be shown
      this.showLeftButton = false;
      this.showRightButton = this.categories.length > 3;
    }

    public filterData(categoryId: number): void {
        // Handle what to do when a category is selected
        this.showEvents(categoryId);
    }

    // Method executed when the slides are changed
    public slideChanged(): void {
        let currentIndex = this.slides.getActiveIndex();
        this.showLeftButton = currentIndex !== 0;
        this.showRightButton = currentIndex !== Math.ceil(this.slides.length() / 3);
    }

    // Method that shows the next slide
    public slideNext(): void {
        this.slides.slideNext();
    }

    // Method that shows the previous slide
    public slidePrev(): void {
        this.slides.slidePrev();
    }
  }
