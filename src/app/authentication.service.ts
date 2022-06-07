/*import { Injectable } from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
export const TOKEN_NAME:string="jwt_token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http:HttpClient) { }
  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user)


  }
  public RegisterUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/register",user)


  }

}*/


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
const USER_NAME = "";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerEndPoint: string;
  loginendpoint:string;
  username: any;
  /*offset:String;
  pnameFromkey:String
  pidFromkey:String;*/


  constructor(private httpClient: HttpClient,  private router: Router) {
    this.registerEndPoint= 'http://localhost:8080/auth/register';
    this.loginendpoint='http://localhost:8080/auth/login';

   }

   


   //To display all countries from covidapi
  /*getAllCountryList(): Observable<any> {
    const url = `https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`;
    return this.httpClient.get(url);
  }

  //To display countryDetails in countrydetails component
  getCountryDetails(pid: String): Observable<any> {
    pid=this.pidFromkey;
    console.log(pid);

    console.log("from service class get CountryDetails() method")
    const url = `https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`;
    console.log(url);
    return this.httpClient.get(url);

  }


  // To searchplayer----searching country is working now
  getCountryList(name: String): Observable<any> {
    // name="rahul"
    name=this.pnameFromkey;
    console.log(name);
    this.offset='&offset=0'
    const url = `https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`;
     console.log(url);
    return this.httpClient.get(url);
  }*/

   registerUser(newUser:any) {
    const url = this.registerEndPoint;
    return this.httpClient.post(url, newUser);
  }


  

  public getToken(User:any){
    console.log("Generating token from servise")
    const url = this.loginendpoint;
    
    localStorage.setItem(this.username,User.username);
    console.log(this.username);
    let x=localStorage.getItem(this.username);
    console.log(x);
    localStorage.setItem(USER_NAME,User.username)
    let y=localStorage.getItem(USER_NAME)
    console.log(y);
    console.log(url);
    return this.httpClient.post(url,User)

  }

  //To remove token from localstorage
  logout() {
    sessionStorage.removeItem(USER_NAME);
    sessionStorage.clear();
    localStorage.removeItem('token');
    localStorage.clear();
    
    console.log("logged out");
  }

}