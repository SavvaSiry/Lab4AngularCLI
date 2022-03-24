import { Injectable } from '@angular/core';
import {Point} from "../modeles/point.model";

@Injectable({
  providedIn: 'root'
})

export class PointService {

  private points = Array.of<Point>();

  constructor() { }

  getPoints(): Point[] {
    return this.points;
  }

  addPoints(point: Point) {
    this.points.push(point);
  }

}
