import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import jwt_decode from "jwt-decode";
import { authUrl } from '../app-global';
import { TransactionData } from '../model/TransactionData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  private url=authUrl;


  login(user) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const body = {
      'email': user.email,
      'password': user.password
    };
    console.log(body)

    return this._http.post<any>(`${this.url}/login`, body)
      .pipe(map((res: any) => {

        let decoded: any = jwt_decode(res.accessToken)
        localStorage.setItem("user", decoded.sub)
        localStorage.setItem("role", decoded.role)
        localStorage.setItem("jwt", res.accessToken);
        
      }));
  }

  signup(user){

    const body = {
      'email': user.email,
      'password': user.password,
      'name': user.name,
      'isCompany': user.isCompany
    };
    console.log(body)

    return this._http.post<any>(`${this.url}/signup`, body)

  }

  decodeToken(token:string){
    const body={
      'token':token
    }
    return this._http.post<TransactionData>(`${this.url}/decode-token`,body);
  }


  
}
