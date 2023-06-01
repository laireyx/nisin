import { Entity } from './entity';

export class Character implements Entity {
  name: string;
  constructor({ name }: Partial<Character>) {
    this.name = name ?? '';
  }
}
