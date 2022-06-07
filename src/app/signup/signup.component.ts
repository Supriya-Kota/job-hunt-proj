/*import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {User} from '../user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 

 user=new User();
 msg='';
 constructor(private _service:AuthenticationService,private _router:Router) { }
 ngOnInit(): void {
}

 RegisterUser(){
  this._service.loginUserFromRemote(this.user).subscribe(
    data=>{console.log("registration success"),
  this._router.navigate(['/login'])},
    error=>{
      console.log("exception occured");
      this.msg="Bad Credentials,please enter valid details"
    }
  );
  
   
   
  
 }

}*/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  constructor(private authservice: AuthenticationService, private router: Router) {
      this.user= new User();
     }


    disp_msg!:String;

  ngOnInit(): void {
  }


  register(SignupForm:NgForm) {
    console.log(this.user);
    this.authservice.registerUser(this.user).subscribe({
      next:(data)=>{console.log("Congratulations "+this.user.username+
      " your account created successfully");
      this.router.navigate(["/login"])},
      error:(e)=>{console.log(e);this.disp_msg="Failed to create account ! Reason: User Already Exists with this Username"
      ;
      }
    })

  }

}
