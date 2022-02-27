import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomePageComponent } from './home-page/home-page.component';
import { PointPageComponent } from './point-page/point-page.component';
import {RouterModule, Routes} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {CookieService} from "ngx-cookie-service";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'points', component: PointPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PointPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    MenubarModule
  ],
  exports: [RouterModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
