import { Component, OnInit } from '@angular/core';
import {Point} from "../modules/point.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PointService} from "../services/point.service";

@Component({
  selector: 'app-point-page',
  templateUrl: './point-page.component.html',
  styleUrls: ['./point-page.component.css']
})
export class PointPageComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {

  }

    title = 'Lab4AngularCLI';

    answer: string | undefined;
    x: number = 0;
    y: number = 0;
    r: number = 0;
    point: Point | undefined;
    points: Point[] = [];

    checkPointUrl = 'http://localhost:8081/post';

    constructor(private http: HttpClient, private pointService: PointService) {
      this.points = pointService.getPoints();
    }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    sendPoint() {
      return this.http.post<Point>(this.checkPointUrl,
        {x: this.x, y: this.y, r: this.r}, this.httpOptions)
        .subscribe({
          next: (data: any) => {
            this.point = data;
            this.drawPoint(this.point);
          },
          error: error => console.log('Eror while send Post', error)
        });
    }

    drawPoint(point : Point | undefined) : void {
      if (point == undefined) return;
      this.points.push(point);
    }

    // sendGet(): void {
    //   this.http.get<Point>(this.configUrl)
    //     .subscribe({
    //       // next: data => {
    //       //   this.answer = data.total.toString();
    //       // },
    //       error: error => {
    //         console.log('Error while send GET', error)
    //       }
    //     });
    //   console.log(this.answer);
    // }


}
