import { Model } from "./Model";
import { Event } from './Event';
export class Category extends Model {
  name: string;
  id: number;
  events: Event[];
  constructor() {
    super();
    this.id = 0;
  }
}
