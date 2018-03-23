import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../app/environments/environment';
import { ApiService } from './api.service';
import { Events } from 'ionic-angular';
import { User } from '../models/User';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthService extends ApiService {

    private user:User;

    constructor (http: HttpClient, protected storage: Storage, private events: Events){
      super(http, storage);
      console.log(this.events);
      this.events.subscribe('user:token', (user, time) => {
        this.getUid();
      });
    }

    public login(email:string, password:string): Observable<any> {
      const baseUrl = environment.baseUrl+'login';
      const postData = {email, password};

      return this.http.post(baseUrl, postData, this.setOrigin())
      .pipe(
        catchError(this.handleError)
      );
    }

    public changePassword(userId:Number, password:string, confirm:string, callback){
      const baseUrl = environment.baseUrl+'user/'+userId;

      const pwdData = {
        password,
        password_confirmation: confirm
      };

      return this.setup(baseUrl).then(url => {
        return this.http.put(url, pwdData).subscribe(data => {callback(data)});
      });


    }

    public getUser() {
      console.log('getUser');
      this.storage.get('token').then((val) => {
        console.log('Got token');
        this.user = new User();
        if(val != null) {
          console.log('Token has value');
          this.user.token = val;
          console.log('user:token');
          this.events.publish('user:token', this.user, Date.now());
        }
        else {
          console.log('user:unauthenticated');
          this.events.publish('user:unauthenticated', this.user, Date.now());
        }
      });
    }

    private getUid() {
      this.storage.get('user_id').then((val) => {
        if(val != null) {
          console.log('Got UID');
          this.user.id = val;
          console.log('user:authenticated');
          this.events.publish('user:authenticated', this.user, Date.now());
        }
        else {
          console.log('user:unauthenticated');
          this.events.publish('user:unauthenticated', this.user, Date.now());
        }
      },
      error => {
        console.error('Error getting item', error);
        console.log('user:unauthenticated');
        this.events.publish('user:unauthenticated', this.user, Date.now());
      });
    }
}
