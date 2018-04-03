import { Model } from "./Model";
import { User } from './User';

export class Event extends Model {
  name: string;
  id: number;
  details: string;
  start: Date;
  end: Date;
  categories: string[];
  users: User[];
  constructor() {
    super();
    this.id = 0;
  }
}
