import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const LINK='http://localhost:8080/jobs/job';
@Injectable({
  providedIn: 'root'
})
export class ForseekerService {

  constructor(private httpCli:HttpClient) { }
  getjobs(page:number) {
    return this.httpCli.get(`${LINK}`+'page='+page);
  }
  searchByCategory(page:number,search:string){
    return this.httpCli.get(`${LINK}`+'category='+search+'&'+'page='+page);

  }
}

