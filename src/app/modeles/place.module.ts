export interface Place {
  id?: number;
  name?: string;
  location?: Location;
  type?: PlaceType;
}

export class PlaceType {
  id?: number;
  name?: string;
}
