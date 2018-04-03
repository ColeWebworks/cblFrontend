import { ModelFactory } from './modelFactory';
import { Category } from '../models/Category';

export class CategoryFactory extends ModelFactory {
  create(data: Array<any>):Array<Category> {
    let models = [];
    data.forEach(element => {
      let c = new Category();
      c.id = element.id;
      c.name = element.name;
      models.push(c);
    });
    return models;
  }
}
