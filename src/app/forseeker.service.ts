import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const PRIVATE='https://www.themuse.com/api/public/jobs?page=1';
@Injectable({
  providedIn: 'root'
})
export class ForseekerService {

  constructor(private httpCli:HttpClient) { }
  getjobs() {
  
    return this.httpCli.get(`${PRIVATE}`);
  }
}
