import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Events } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import{
  Http,
  HttpModule
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from '../services/login.service';
import { ContentService } from '../services/content.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AdminPage } from '../pages/admin/admin';
import { LinksPage } from '../pages/links/links';
import {ChangePassword} from '../pages/admin/change-password';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AdminPage,
    LinksPage,
    AdminPage,
    ChangePassword
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AdminPage,
    LinksPage,
    AdminPage,
    ChangePassword
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ContentService,
    Events,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
