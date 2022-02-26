import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  uri = 'http://localhost:8081';
  // @ts-ignore
  token;

  httpOptions = {
    // headers: new HttpHeaders({
    //   'Content-Type': 'application/json',
    // }),
    withCredentials: true
  };

  constructor(private http: HttpClient, private router: Router) { }

  auth() {
    this.http.get(this.uri + '/authenticate', this.httpOptions)
      .subscribe((resp: any) => {
        this.router.navigate(['points']);
        localStorage.setItem('auth_token', resp.token);
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
