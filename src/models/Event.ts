import { User } from './User';
export class Event {
  name: string;
  id: number;
  details: string;
  start: Date;
  end: Date;
  categories: string[];
  users: User[];
  constructor() {
    this.id = 0;
  }
}
