import { Entity } from '../entity';

export abstract class Location {
  name: string;

  entities: Entity[] = [];

  constructor({ name }: Partial<Location>) {
    this.name = name ?? '';
  }
}
