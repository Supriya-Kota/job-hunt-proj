import { Component, OnInit } from '@angular/core';
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
  

}
