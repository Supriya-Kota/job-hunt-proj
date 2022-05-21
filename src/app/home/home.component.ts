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

constructor(private seekerservice:ForseekerService) { }

  ngOnInit(): void {
   
    this.getjobs();
 }
 getjobs()
  {
    this.seekerservice.getjobs().subscribe(
      (response:any)=>
    {
      console.log(response['results']);
      this.jobs = response['results'];
      if(response.length>0)
      {
        this.totaljobs=response.length;
      }
    },
    (error)=>{
      console.log(error.msg);
    }
    );
  }
}
