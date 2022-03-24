import { Injectable } from '@angular/core';
import {Point} from "../modeles/point.model";
import {Creature} from "../modeles/creature.module";

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
