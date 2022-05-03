import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionDetails } from '../models/ConnectionDetails';
import { LoginDetails } from '../models/LoginDetails';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(
    public http : HttpClient,
    private globalVariables : GlobalService
  
    ) { }

    
    
  authenticate(cd : ConnectionDetails) : Observable<LoginDetails>{

    return this.http.post<LoginDetails>('http://localhost:8081/SpringMVC/servlet/auth/signIn',cd);
  }
  register(username: string, nom: string, prenom: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8081/SpringMVC/servlet/auth/' + 'signUp', {
      username,
      nom,
      prenom,
      password
    });}


  logout() {
    //sessionStorage.removeItem('authenticatedUser')
    sessionStorage.clear();
    localStorage.clear();
    this.globalVariables.role = null
    this.globalVariables.username = null
    this.globalVariables.token = ''
     console.log(this.isUserLoggedIn())
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('token')
    return !(user === '')
  }
  
  


}
