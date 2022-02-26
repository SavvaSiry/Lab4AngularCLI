export class Point {

  private _x: number;
  private _y: number;
  private _r: number;
  private _time: string | undefined;
  private _status: string | undefined;

  constructor(x: number, y: number, r: number, time: string | undefined, status: string | undefined) {
    this._x = x;
    this._y = y;
    this._r = r;
    this._time = time;
    this._status = status;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get r(): number {
    return this._r;
  }

  set r(value: number) {
    this._r = value;
  }

  get time(): string | undefined {
    return this._time;
  }

  set time(value: string | undefined) {
    this._time = value;
  }

  get status(): string | undefined {
    return this._status;
  }

  set status(value: string | undefined) {
    this._status = value;
  }
}
