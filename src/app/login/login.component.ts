import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../login';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*
  hero = 'Windstorm';
  */
  uName:string;
  uPass:string;
  btnclass:string="btn-success";
  
  loginDetails: Login [];
  constructor(private router : Router,private loginService: LoginService) { }

  ngOnInit() {
    this.getLogins();
  }

  UserValidation(event){
    this.uName=event.target.elements[0].value;
    this.uPass=event.target.elements[1].value;
     if(this.uName === this.loginDetails[0].uid && this.uPass === this.loginDetails[0].pass){
      this.loginService.setUsername(this.uName);
      this.router.navigate(['/home']);
    }else{
    this.btnclass="btn-danger";
  }
 }

 getLogins(): void {
    this.loginService.getLogins()
        .subscribe(logins => this.loginDetails = logins);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/