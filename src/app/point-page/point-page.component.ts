import {Component, OnInit} from '@angular/core';
import {Point} from "../modules/point.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PointService} from "../services/point.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-point-page',
  templateUrl: './point-page.component.html',
  styleUrls: ['./point-page.component.css'],
  providers: [MessageService,ConfirmationService]
})

export class PointPageComponent implements OnInit {

  pointDialog: boolean = false;
  x: number = 0;
  y: number = 0;
  r: number = 0;
  point?: Point;
  points: Point[] = [];
  checkPointUrl = 'http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  submitted?: boolean;

  selectedPoints?: Point[];

  constructor(private http: HttpClient, private pointService: PointService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.points = pointService.getPoints();
  }

  ngOnInit(): void {
    this.http.get<Point[]>(this.checkPointUrl + 'points', this.httpOptions)
      .subscribe({
        next: (data: any) => {
          this.points = data;
        }
      })
  }

  sendPoint() {
    this.submitted = true;
    this.http.post<Point>(this.checkPointUrl + 'post',
      {x: this.x, y: this.y, r: this.r}, this.httpOptions)
      .subscribe({
        next: (data: any) => {
          this.point = data;
          this.drawPoint(this.point);
        },
        error: error => console.log('Eror while send Post', error)
      });
    this.points = [...this.points];
    this.pointDialog = false;
    this.point = {};
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Point Deleted', life: 3000});
  }

  drawPoint(point: Point | undefined): void {
    if (point == undefined) return;
    this.points.push(point);
  }

  openNew() {
    this.point = {};
    this.submitted = true;
    this.pointDialog = true;
  }

  hideDialog() {
    this.pointDialog = false;
    this.submitted = false;
  }

  editPoint(point: Point) {
    this.point = {...point};
    this.pointDialog = true;
  }

  deletePoint(point: Point) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete X: ' + point.x + ' Y: ' + point.y + ' R: ' + point.r +' ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.points.splice(this.points.indexOf(point), 1);
        this.point = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Point Deleted', life: 3000});
      }
    });
  }

  deleteSelectedPoints() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected points?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.points = this.points.filter(val => !this.selectedPoints?.includes(val));
        this.selectedPoints = [];
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }
}
