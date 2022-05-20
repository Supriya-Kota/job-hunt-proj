import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent implements OnInit {

  constructor() { }
  @Input('data') job:any


  ngOnInit(): void {
    console.log(this.job)
  }

}
