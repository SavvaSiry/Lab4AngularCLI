import {Clan} from "./clan.module";

export interface Creature {

  id?: number;
  birthday?: Date;
  name?: string;
  clan?: Clan;

}
