import { Component, OnInit } from '@angular/core';
import{ForseekerService} from '../forseeker.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

p:any=1
jobs:any[] = [];
waitforjobs:any;
appliedmessage:any;
alreadyapplied:any;
errormessage:any;
totaljobs:any;
page:number = 1;
isEndPage:boolean = false;
constructor(private seekerservice:ForseekerService) { }

  ngOnInit(): void {

    this.getjobs(this.page);
 }
 goprev(){
  this.getjobs(this.page-1);
 }
 goNext(){
  this.getjobs(this.page+1);
 }
 getjobs(page:number)
  {
    this.seekerservice.getjobs(page).subscribe(
      (response:any)=> {
        console.log(response['results']);
        this.jobs = response['results'];
        if (response.length < 20) {
          this.totaljobs = response.length;
          this.isEndPage = true;
        }
        this.page = this.page <= page ? this.page<page ? this.page+1 : this.page : this.page-=1;
      },
    (error)=>{
      console.log(error.msg);
    }
    );
  }
}
