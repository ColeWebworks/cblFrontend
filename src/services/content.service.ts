import{Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../app/environments/environment';
import { NativeStorage } from '@ionic-native/native-storage';
import { ApiService } from './api.service';

@Injectable()
export class ContentService extends ApiService {
  constructor (http: HttpClient, nativeStorage: NativeStorage){
    super(http, nativeStorage);
  }

  public getLinks(callback) {
    const baseUrl = environment.baseUrl+'content/resources';

    return this.setup(baseUrl).then(url => {
      return this.http.get(url).subscribe(data => {callback(data)});
    });

  }

  private setup(baseUrl) {
    return this.getAuth().then(token => {
      const tokenUrl = baseUrl + '?api_token='+token;
      return tokenUrl;
    });
  }
}
