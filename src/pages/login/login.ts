import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/login.service';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public authService: AuthService, private nativeStorage: NativeStorage) {
  }

  attemptSignin(username: string, password: string) {
    console.log(username + ':'+password);
    this.authService.login(username, password).subscribe(data => {
      if(typeof data.token != 'undefined') {
        this.nativeStorage.setItem('token', {value: data.token})
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
      }
    });
    return false;
  }

}
