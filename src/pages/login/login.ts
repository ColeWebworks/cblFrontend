import { Component } from '@angular/core';
import { NavController, Navbar } from 'ionic-angular';
import { AuthService } from '../../services/login.service';
import { NativeStorage } from '@ionic-native/native-storage';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public authService: AuthService, private nativeStorage: NativeStorage, public alertCtrl: AlertController, public loadingCtrl: LoadingController ) {

  }

  attemptSignin(username: string, password: string) {
    console.log(username + ':'+password);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.authService.login(username, password).subscribe(userData => {
      if(typeof userData.token != 'undefined') {
        this.nativeStorage.setItem('token', {value: userData.token})
        .then(
          () => {
            console.log('Stored item!');
            this.nativeStorage.setItem('user_id', {value: userData.uid}).then();
            loading.dismiss();
            this.nativeStorage.getItem('token').then((data) => {
              this.authService.getUser();
              let alert = this.alertCtrl.create({
                title: 'Logged in!',
                subTitle: 'Your token is: '+ data.value,
                buttons: ['OK']
              });
              alert.present();
            });
          },
          error => console.error('Error storing item', error)
        );
      }
    });
    return false;
  }

}
