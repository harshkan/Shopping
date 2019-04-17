import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Login } from './login';
import { LOGINS } from './mock-logins';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
username:string="";
  constructor() { }
  
setUsername(username){
this.username=username;
}

getUsername(){
return this.username;
}
  getLogins(): Observable<Login[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(LOGINS);
  }
}
