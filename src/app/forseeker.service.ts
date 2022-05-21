import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const PRIVATE='https://www.themuse.com/api/public/jobs?';
@Injectable({
  providedIn: 'root'
})
export class ForseekerService {

  constructor(private httpCli:HttpClient) { }
  getjobs(page:number) {
    return this.httpCli.get(`${PRIVATE}`+'page='+page);
  }
}

