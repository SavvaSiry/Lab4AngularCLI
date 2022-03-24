import {Component, OnInit} from '@angular/core';
import {Creature} from "../modeles/creature.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Clan} from "../modeles/clan.module";

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit {

  clans: Clan[] = [];
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
    this.http.get<Creature[]>(this.checkPointUrl + 'clans', this.httpOptions)
      .subscribe({
        next: (data: any) => {
          this.clans = data;
        }
      })
  }

}
