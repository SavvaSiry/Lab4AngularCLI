import {Clan} from "./clan.module";

export interface OrderSpice{
  id?: number;
  clan?: Clan;
  clan2?: Clan;
  status?: String;
  weight?: number;
  date?: Date;
}
