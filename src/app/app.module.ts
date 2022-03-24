import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HomePageComponent} from './home-page/home-page.component';
import {PointPageComponent} from './point-page/point-page.component';
import {RouterModule, Routes} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {CookieService} from "ngx-cookie-service";
import {ClanComponent} from './clan/clan.component';
import {CreatureComponent} from './creature/creature.component';
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {RippleModule} from "primeng/ripple";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputMaskModule} from "primeng/inputmask";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'points', component: PointPageComponent},
  {path: 'creatures', component: CreatureComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PointPageComponent,
    ClanComponent,
    CreatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    MenubarModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    RippleModule,
    BrowserAnimationsModule,
    InputTextModule,
    ConfirmDialogModule,
    InputMaskModule,
    DropdownModule,
    CalendarModule,
  ],
  exports: [RouterModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
