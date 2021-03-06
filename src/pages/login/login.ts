import { Component } from '@angular/core';
import { NavController, Navbar } from 'ionic-angular';
import { AuthService } from '../../services/login.service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../../pages/home/home';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public authService: AuthService, protected storage: Storage, public alertCtrl: AlertController, public loadingCtrl: LoadingController ) {
  }

  ionViewCanEnter() {
    if (this.authService.isLoggedIn) {
      this.navCtrl.push(HomePage);
    }
  }

  attemptSignin(username: string, password: string) {
    console.log(username + ':'+password);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.authService.login(username, password).subscribe(userData => {
      if(typeof userData.token != 'undefined') {

        this.storage.set('token', userData.token).then(() => {
          this.authService.getUser();

          this.storage.get('token').then((val) => {
            let alert = this.alertCtrl.create({
              title: 'Logged in!',
              subTitle: 'Your token is: '+ val,
              buttons: ['OK']
            });
            loading.dismiss();
            alert.present();
          });
        });
        this.storage.set('user_id', userData.uid);
        this.storage.set('user_role', userData.role);
      }
    });
    return false;
  }

}
