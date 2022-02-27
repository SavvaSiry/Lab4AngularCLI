import {Component} from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private authService: AuthServiceService) {
  }

  ngOnInit() {

  }

  toPoints() {
    console.log("you are logging in");
    this.authService.auth();
    this.authService.logIn;
  }
}
