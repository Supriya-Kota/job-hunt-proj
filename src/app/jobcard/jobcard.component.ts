import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent implements OnInit {
  @Input('data') job:any;
  name:string = ''
  location:string=''
  company:string=''
  landing_page:string=''
  constructor() { }
  ngOnInit(): void {
    if(this.job["categories"].length>0 && this.job["categories"][0]["name"] != undefined){
      this.name = this.job["categories"][0]["name"];
    }
    if(this.job["locations"].length>0 && this.job["locations"][0]["name"] != undefined){
      this.location = this.job["locations"][0]["name"];
    }
    if(this.job["company"]["name"]!= undefined){
      this.company = this.job["company"]["name"];
    }
    if(this.job["refs"]["landing_page"]!= undefined){
      this.landing_page = this.job["refs"]["landing_page"];
    }
   
   
   
   
  }
  
 
}
