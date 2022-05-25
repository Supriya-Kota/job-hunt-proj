import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

 fullname:string='';
 mobile:string='';
 pass:string='';
 email:string='';
 onSubmit(){
  
   console.log(this.fullname)
   console.log(this.mobile)
   console.log(this.pass)
   console.log(this.email)
   
  
 }

}
