import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { User } from './user';
import { EMPTY, Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DataService{

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:5001/";
  headers = new HttpHeaders().append('Content-Type', 'application/json');//.append('Authorization','strict-origin-when-cross-origin')
  private _jsonURL = 'assets/mockloggeduser.json';
  public getLoggedUserInfo():Observable<any>{

    return this.http.get(this._jsonURL);
  }
  
  public getUsersearch(searchForNumber:string): any {
    // return this.http.post("backend url"+searchForNumber,  {'headers': this.headers }, {responseType: 'json'});
   return;
  }
  //QR code generator Api
  //https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

}

