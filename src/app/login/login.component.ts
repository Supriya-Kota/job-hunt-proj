import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fullname:string='';
  pass:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
