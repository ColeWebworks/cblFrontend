import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../app/environments/environment';
import { NativeStorage } from '@ionic-native/native-storage';
import { ApiService } from './api.service';
import { Events } from 'ionic-angular';
import { User } from '../models/User';

@Injectable()
export class AuthService extends ApiService {

    private user:User;

    constructor (http: HttpClient, nativeStorage: NativeStorage, private events: Events){
      super(http, nativeStorage);
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
      this.nativeStorage.getItem('token').then((data) => {
        console.log('Got token');
        this.user = new User();
        if(data.value != null) {
          console.log('Token has value');
          this.user.token = data.value;
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
      this.nativeStorage.getItem('user_id').then((d) => {
        console.log(typeof d);
        if(d.value != null) {
          console.log('Got UID');
          this.user.id = d.value;
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
