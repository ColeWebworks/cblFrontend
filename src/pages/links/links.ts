import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentService } from '../../services/content.service';
import { Link } from '../../models/link';
import { LoadingController } from 'ionic-angular';
import { LinkFactory } from '../../factories/linkFactory';

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

  links:Array<Link>;
  partners:Array<Link>;
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
      const factory     = new LinkFactory();
      this.links        = factory.create(data.useful_links);
      console.log(this.links);
      this.partners     = factory.create(data.partners);
      loading.dismiss();
    });
  }

}
