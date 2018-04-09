import { Model } from "./Model";

export class Role extends Model {
  id: number;
  name: string;
  constructor(id:number, name:string) {
    super();
    this.id = id;
    this.name = name;
  }
}
