import{Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../app/environments/environment';
import { Storage } from '@ionic/storage';


@Injectable()
export class ApiService {
  http: HttpClient;
  constructor (private httpClient: HttpClient, protected storage: Storage){
    this.http = httpClient;
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error},` +
        `Message was ${error.message}`
      );
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

  protected setOrigin() {
    return {
      headers: new HttpHeaders({
        'Origin':  'App'
      })
    };
  }

  protected getAuth() {
    return this.storage.get('token').then((val) => {
      return val;
    });
  }

  protected setup(baseUrl) {
    return this.getAuth().then(token => {
      const tokenUrl = baseUrl + '?api_token='+token;
      return tokenUrl;
    });
  }
}
