import { Component, OnInit } from '@angular/core';
import{ForseekerService} from '../forseeker.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

jobs:any;
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
      if(response && response.length>0)
      {
        this.jobs=response['results'];
        this.totaljobs=response.length;
      }
      console.log(this.jobs['results'])
    },
    (error)=>{
      console.log(error.msg);
    }
    );
  }
}
