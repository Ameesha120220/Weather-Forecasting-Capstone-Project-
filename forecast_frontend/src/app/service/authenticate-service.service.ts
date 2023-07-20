import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../modal/login';
import { Signup } from '../modal/signup';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {

  private authenticated: boolean = false;
  private token!: string;

  constructor(private httpClient: HttpClient) { }

  addUser(signup: Signup): Observable<Signup> {
    return this.httpClient.post<Signup>('http://localhost:8088/api/v1/user/register', signup);
  }

  getusers(user: Login): Observable<any> {
    console.log("GET USER");
    console.log(user.username);
    console.log(user.password);
    this.authenticated = true;
  
    return this.httpClient.post<any>(`http://localhost:8088/api/v1/users/login`, user, { headers: new HttpHeaders().set('responseType', 'text') })
      .pipe(
        map(userData => {
          localStorage.setItem('username', user.username);
          this.token = userData.token;
          console.log("Token string: " + this.token);
          localStorage.setItem('token', this.token);
          return userData;
        })
      );
  }

  getUserByUsername(username:string){
    return this.httpClient.get<any>(`http:localhost:8088/api/v1/user/details/${username}`);
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  setBearerToken(token: string) {
    sessionStorage.setItem('token', token);
  }
}
