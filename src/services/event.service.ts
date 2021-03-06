import{Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../app/environments/environment';
import { Storage } from '@ionic/storage';
import { ApiService } from './api.service';
import { Events } from 'ionic-angular';

@Injectable()
export class EventService extends ApiService {
  constructor (http: HttpClient, protected storage: Storage, protected events: Events){
    super(http, storage);
  }

  public getEvents(callback) {
    const baseUrl = environment.baseUrl+'event';
    console.log(baseUrl);

    return this.setup(baseUrl).then(url => {
      return this.http.get(url).subscribe(data => {callback(data)});
    });

  }

  public postEvent(postData, callback, errorCallback) {
    const baseUrl = environment.baseUrl+'event';
    console.log(baseUrl);
    return this.setup(baseUrl).then(url => {
      return this.http.post(url, postData).subscribe(data => {
        callback(data);
        if(data.status) {
          this.events.publish('event:created', data, Date.now());
        }
      },
      error => {
        errorCallback(error);
      });
    });
  }

  public getCategories(callback) {
    const baseUrl = environment.baseUrl+'event/categories';
    console.log(baseUrl);

    return this.setup(baseUrl).then(url => {
      return this.http.get(url).subscribe(data => {callback(data)});
    });
  }

}
