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

  public getLinks() {
    console.log(this.getAuth());
    const baseUrl = environment.baseUrl+'content/resources';
    console.log(baseUrl);

    return this.http.get(baseUrl, this.setOrigin())
      .pipe(
        catchError(this.handleError)
      );

  }
}
