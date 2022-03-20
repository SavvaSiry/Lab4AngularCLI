import {Component, OnInit} from '@angular/core';
import {Creature} from "../modules/creature.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.css']
})
export class CreatureComponent implements OnInit {

  creatures: Creature[] = [];
  checkPointUrl = 'http://localhost:8081/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Creature[]>(this.checkPointUrl + 'creatures', this.httpOptions)
      .subscribe({
        next: (data: any) => {
          this.creatures = data;
        }
      })
  }

}
