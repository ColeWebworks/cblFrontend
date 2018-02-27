import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentService } from '../../services/content.service';
import { Link } from '../../models/link';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-links',
  templateUrl: 'links.html',
})
export class LinksPage {

  links:String[];
  partners:String[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public contentService:ContentService, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinksPage');
  }

  ionViewWillEnter() {
    this.getContent();
  }

  getContent() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.contentService.getLinks( data => {
      this.links = data.useful_links;
      this.partners = data.partners;
      loading.dismiss();
    });
  }

}
