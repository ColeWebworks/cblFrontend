import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform, Events, Loading, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { Role } from '../models/Role';

import { HomePage } from '../pages/home/home';
import { AdminPage } from '../pages/admin/admin';
import { LinksPage } from '../pages/links/links';
import { AuthService } from '../services/login.service';
import { EventsPage } from '../pages/Events/events';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, blacklist:any}>;

  loggedIn: boolean = false;
  ld:Loading;

  constructor(public loadingCtrl: LoadingController, private events: Events, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public authService: AuthService, private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', blacklist: [], component: HomePage },
      { title: 'Links', blacklist: [], component: LinksPage},
      { title: 'Events', blacklist: [], component: EventsPage},
      { title: 'Admin', blacklist: [2, 3, 4], component: AdminPage}
    ];

    this.ld = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.events.subscribe('user:authenticated', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user.role.name, 'at', time);
      if(user.role.id === 1) {
        this.nav.setRoot(AdminPage);
      }
      else {
        this.nav.setRoot(EventsPage);
      }
      this.ld.dismiss();
    });
    this.events.subscribe('user:unauthenticated', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.ld.dismiss();
      this.nav.setRoot(LoginPage);
    });
  }

  showButton(page): boolean {
    for(let role of page.blacklist) {
      if(role == this.authService.user.role.id) {
        return false;
      }
    }

    return true;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.getUser();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.authService.logout();
    this.nav.setRoot(LoginPage);
  }
}
