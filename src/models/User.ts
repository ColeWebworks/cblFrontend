import { Model } from "./Model";

export class User extends Model {
  state:boolean;
  id: number;
  token: string;
  constructor() {
    super();
    this.state = false;
    this.id = 0;
    this.token = null;
  }
}
