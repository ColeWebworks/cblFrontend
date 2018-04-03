import { ModelFactory } from './modelFactory';
import { Link } from '../models/link';

export class LinkFactory extends ModelFactory {
  create(data: Array<any>):Array<Link> {
    let models = [];
    data.forEach(element => {
      let l = new Link();
      l.title = element.title;
      l.link  = element.link;
      models.push(l);
    });
    return models;
  }
}
