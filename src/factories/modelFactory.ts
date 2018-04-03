import { Model } from '../models/Model';

export abstract class ModelFactory {
  abstract create(models: Array<any>): Array<Model>;
}
