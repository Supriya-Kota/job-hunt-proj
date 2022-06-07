/*import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {User} from '../user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
   user=new User();
   msg='';

  constructor(private _service:AuthenticationService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{console.log("login success"),
    this._router.navigate(['/home'])},
      error=>{
        console.log("exception occured");
        this.msg="Bad Credentials,please enter valid details"
      }
    );

  }
  

}*/


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
export const TOKEN_NAME = "token";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  dataa: any;
  disp_msg!:string;
  constructor(private authservice: AuthenticationService, private router: Router) {
    this.user=new User();
   }

  ngOnInit(): void {
  }
  login(LoginForm: NgForm) {
    console.log("User----->"+this.user.username);
    this.authservice.getToken(this.user).subscribe(
      (data=>{
        this.dataa=data;
        console.log(this.dataa);
        localStorage.setItem(TOKEN_NAME, this.dataa['token']);
        console.log("updated-->"+TOKEN_NAME);

      console.log("token is:"+this.dataa['token']) ;
      console.log("Login Successfull!");
     

      this.router.navigate(["/home"]);
      }),
      (error=>{console.log("Error!--Token not generated because of Invalid credentials");
      this.disp_msg="Login Failed! Please provide valid credentials";
      })

    )
    
  }
}