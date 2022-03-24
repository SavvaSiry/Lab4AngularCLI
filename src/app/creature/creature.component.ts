import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreatureService} from "../services/creature.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Creature} from '../modeles/creature.module';
import {Clan} from "../modeles/clan.module";

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.css'],
  providers: [MessageService,ConfirmationService]
})

export class CreatureComponent implements OnInit {

  creatures: Creature[] = [];
  clans: Clan[] = [];
  selected: Creature[] = [];

  selectedClan?: Clan;
  // @ts-ignore
  creature: Creature;

  display: boolean = false;
  submitted: boolean = false;

  url = 'http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };


  constructor(private http: HttpClient, private creatureService: CreatureService, private messageService: MessageService, private confirmationService: ConfirmationService ) {
  }

  ngOnInit(): void {
    this.http.get<Creature[]>(this.url + 'creatures', this.httpOptions)
      .subscribe({
        next: (data: any) => {
          this.creatures = data;
        }
      })
    this.http.get<Clan[]>(this.url + 'clan', this.httpOptions)
      .subscribe({
        next: (data: any) => {
          this.clans = data;
        }
      })
  }

  send() {
    this.submitted = true;
    return this.http.post<Creature>(this.url + 'post/creature',
      this.creature, this.httpOptions)
      .subscribe({
        next: (data: any) => {
          this.creatures.push(data);
        },
        error: error => this.messageService.add({severity:'error', summary: 'Error', detail: error, life: 3000}),
      });
    this.display = false;
    this.creature = {};
  }

  openNew() {
    this.creature = {};
    this.submitted = true;
    this.display = true;
  }

  hideDialog() {
    this.display = false;
    this.submitted = false;
  }

  edit(creature: Creature) {
    this.creature = {...creature};
    this.display = true;
  }

  delete(creature: Creature) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete: ' + creature.name +' ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        return this.http.post(this.url + 'delete/creature',
          creature, this.httpOptions)
          .subscribe({
            error: error => this.messageService.add({severity:'error', summary: 'Error', detail: error, life: 3000}),
          });
        this.creatures.splice(this.creatures.indexOf(creature), 1);
        this.creature = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Deleted', life: 3000});
      }
    });
  }

  deleteSelected() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected points?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        return this.http.post(this.url + 'delete/creatures',
          this.selected, this.httpOptions)
          .subscribe({
            error: error => this.messageService.add({severity:'error', summary: 'Error', detail: error, life: 3000}),
          });
        this.creatures = this.creatures.filter(val => !this.selected?.includes(val));
        this.selected = [];
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }
}
