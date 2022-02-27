import {Component, NgModule, OnInit} from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";
import {MenuItem} from "primeng/api";
import {AuthServiceService} from "./services/auth-service.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})

export class AppComponent implements OnInit {

  title = 'Lab4AngularCLI';
  items: MenuItem[];

  constructor(private authService: AuthServiceService) {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      {
        // label: 'Выйти'  command: this.authService.logout,
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

  logout() {
    this.authService.logout();
    console.log('click')
  }
}

