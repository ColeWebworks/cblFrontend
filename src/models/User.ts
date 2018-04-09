import { Model } from "./Model";
import { Role } from './Role'

export class User extends Model {
  state:boolean;
  id: number;
  token: string;
  role:Role;
  constructor() {
    super();
    this.state = false;
    this.id = 0;
    this.token = null;
  }
}
