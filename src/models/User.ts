import { NativeStorage } from '@ionic-native/native-storage';
export class User {
  state:boolean;
  id: number;
  token: string
  constructor() {
    this.state = false;
    this.id = 0;
    this.token = null;
  }
}
