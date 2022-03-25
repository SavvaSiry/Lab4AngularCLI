import {Creature} from "./creature.module";

export class Worker {
  id?: number;
  workerType?: WorkerType;
  creature?: Creature;
}

export class WorkerType {
  id?: number;
  name?: string;
}
