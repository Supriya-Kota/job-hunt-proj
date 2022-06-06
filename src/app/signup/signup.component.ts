import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {User} from '../user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 /*fullname:string='';
 qualification:string='';
 pass:string='';
 email:string='';*/

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

}
