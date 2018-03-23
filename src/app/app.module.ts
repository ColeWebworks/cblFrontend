import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Events } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

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
import { ChangePassword } from '../pages/admin/change-password';
import { attendance } from '../pages/Events/attendance.html';
import { createEvent } from '../pages/Events/createEvent.html';
import { EventPage } from '../pages/Events/event.html';



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
    ChangePassword,
    attendance,
    createEvent,
    EventPage

    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AdminPage,
    LinksPage,
    AdminPage,
    ChangePassword,
    Events,
    attendance,
    createEvent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ContentService,
    NativeStorage,
    Events,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
