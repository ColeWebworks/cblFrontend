import { Event } from './Event';
export class Category {
  name: string;
  id: number;
  events: Event[];
  constructor() {
    this.id = 0;
  }
}
