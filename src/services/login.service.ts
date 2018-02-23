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
export class AuthService extends ApiService {
    constructor (http: HttpClient, nativeStorage: NativeStorage){
      super(http, nativeStorage);
    }

    public login(email:string, password:string): Observable<any> {
      const baseUrl = environment.baseUrl+'login';
      const postData = {email, password};

      return this.http.post(baseUrl, postData, this.setOrigin())
      .pipe(
        catchError(this.handleError)
      );
    }
}