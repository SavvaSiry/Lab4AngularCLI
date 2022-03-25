import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfirmationService, MessageService} from "primeng/api";
import {Mining} from "../modules/mining.module";


@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css'],
  providers: [MessageService, ConfirmationService]
})

export class MiningComponent implements OnInit {

  entities: Mining[] = [];
  selected: Mining[] = [];
  selectedEntity?: Mining;

  // @ts-ignore
  entity: Mining;

  display: boolean = false;
  submitted: boolean = false;

  url = 'http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };


  constructor(private http: HttpClient, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.http.get<Mining[]>(this.url + 'mining', this.httpOptions)
      .subscribe({
        next: (data: any) => {
          this.entities = data;
        }
      })
  }

  send() {
    this.submitted = true;
    this.http.post<Mining>(this.url + 'post/mining',
      this.entity, this.httpOptions)
      .subscribe({
        next: (data: any) => {
          this.entities.push(data);
        },
        error: error => this.messageService.add({severity: 'error', summary: 'Error', detail: error, life: 3000}),
      });
    this.display = false;
    this.submitted = false;
    this.entity = {};
  }

  openNew() {
    this.entity = {};
    this.submitted = true;
    this.display = true;
  }

  hideDialog() {
    this.display = false;
    this.submitted = false;
  }

  edit(entity: Mining) {
    this.entity = {...entity};
    this.display = true;
  }

  delete(entity: Mining) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete: ' + entity.id + ' ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.http.post(this.url + 'delete/mining',
          entity, this.httpOptions)
          .subscribe({
            error: error => this.messageService.add({severity: 'error', summary: 'Error', detail: error, life: 3000}),
          });
        this.entities.splice(this.entities.indexOf(entity), 1);
        this.entity = {};
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Deleted', life: 3000});
      }
    });
  }

  deleteSelected() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected points?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.http.post(this.url + 'delete/minings',
          this.selected, this.httpOptions)
          .subscribe({
            error: error => this.messageService.add({severity: 'error', summary: 'Error', detail: error, life: 3000}),
            next: value => {
              if (value == true) {
                this
                  .entities = this.entities.filter(val => !this.selected?.includes(val));
                this
                  .selected = [];
                this
                  .messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Products Deleted',
                  life: 3000
                });
              } else this
                .messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: 'Can\'t Delete',
                  life: 3000
                });
            }
          });
      }
    });
  }
}

