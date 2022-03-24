import {Place} from "./place.module";
import {OrderSpice} from "./orderspice.module";
import {Worker} from "./worker.module";

export class Mining {
  id?: number;
  worker?: Worker;
  place?: Place;
  order?: OrderSpice;
}
