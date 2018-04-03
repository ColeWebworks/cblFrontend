import { ModelFactory } from './modelFactory';
import { Event } from '../models/Event';
import { Category } from '../models/Category';

export class EventFactory extends ModelFactory {
  create(data: Array<any>):Array<Category> {
    let models = [];
    data.forEach(element => {
      let c = new Category();
      c.name = element.name;
      c.events = [];

      if(element.events.length > 0) {
        element.events.forEach(el => {
          let e = new Event();
          e.name    = el.name;
          e.details = el.details;
          e.start   = el.start;
          c.events.push(e);
        });
      }
      models.push(c);
    });
    return models;
  }
}
