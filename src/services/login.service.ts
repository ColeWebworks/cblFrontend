import{Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../app/environments/environment';
import { ApiService } from './api.service';

@Injectable()
export class AuthService extends ApiService {
    constructor (http: HttpClient){
      super(http);
    }

    public login(email:string, password:string): Observable<any> {
      const baseUrl = environment.baseUrl+'login';
      const postData = {email, password};
      for(var i in postData) {
        console.log(i+ ' : ' + postData[i]);
      }

      let headers = new Headers();
      headers.append('Origin', 'App');

      return this.http.post(baseUrl, postData)
      .pipe(
        catchError(this.handleError)
      );
    }
}
