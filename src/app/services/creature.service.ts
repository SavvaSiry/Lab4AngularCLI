import { Injectable } from '@angular/core';
import {Point} from "../modules/point.model";
import {Creature} from "../modules/creature.module";

@Injectable({
  providedIn: 'root'
})
export class CreatureService {

  private creatures = Array.of<Creature>();

  constructor() { }

  getCreatures(): Creature[] {
    return this.creatures;
  }

}
