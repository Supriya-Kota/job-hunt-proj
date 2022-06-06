import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

 fullname:string='';
 qualification:string='';
 pass:string='';
 email:string='';
 onSignup(){
  
   console.log(this.fullname)
   console.log(this.qualification)
   console.log(this.pass)
   console.log(this.email)
   
  
 }

}
