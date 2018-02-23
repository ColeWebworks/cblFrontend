import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentService } from '../../services/content.service';
import { Link } from '../../models/link';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public contentService:ContentService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinksPage');
  }

  ionViewWillEnter() {
    this.getContent();
  }

  getContent() {
    this.contentService.getLinks().subscribe(data => {
      data.useful_links.forEach(element => {
        console.log(element.title);
      });
    });
  }

}
