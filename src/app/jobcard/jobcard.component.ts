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
  constructor() { }
  ngOnInit(): void {
    if(this.job["categories"].length>0 && this.job["categories"][0]["name"] != undefined){
      this.name = this.job["categories"][0]["name"];
    }
  }
}
