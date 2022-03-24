import {Creature} from "./creature.module";

export class Worker {
  id?: number;
  name?: string;
  type?: WorkerType;
  creature?: Creature;
}

export class WorkerType {
  id?: number;
  name?: string;
}
