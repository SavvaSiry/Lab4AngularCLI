import {Component, NgModule, OnInit} from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})

export class AppComponent implements OnInit {

  title = 'Lab4AngularCLI';
  items: MenuItem[];

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Войти',
      },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      //     {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      //   ]
      // }
    ];
  }
}

