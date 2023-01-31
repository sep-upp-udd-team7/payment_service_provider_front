import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { paypalUrl } from '../app-global';
import { CreatePaypalPayment } from '../model/CreatePaypalPayment';
import { ExecutePaypalPayment } from '../model/ExecutePaypalPayment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {
  
  private url=paypalUrl;

  constructor(private _http: HttpClient,private authService:AuthService) {

   }

  createPayment(amount:string,transactionId:string,shopId:string){
    let body:CreatePaypalPayment={
      amount:amount,
      transactionId:transactionId,
      shopId:shopId
    }
    const headers = this.authService.generateAuthHeaders();
    return this._http.post<any>(`${this.url}/create-payment`,body, { headers: headers });
  }

  executePayment(body:ExecutePaypalPayment){
    const headers = this.authService.generateAuthHeaders();
    return this._http.post<any>(`${this.url}/execute`,body,{ headers: headers });
  }

  test(){
    return this._http.get<any>("localhost:8000/test");
  }

  cancelPayment(trancationId:string){
    const headers = this.authService.generateAuthHeaders();
    return this._http.get(`${this.url}/cancel-payment/${trancationId}`,{ headers: headers });
  }

  executeSubscription(token:string){
    const headers = this.generateAuthHeaders();
    return this._http.get(`${this.url}/subscriptions/execute/${token}`,{ headers: headers });
  }

  cancelSubscription(token:string){
    const headers = this.generateAuthHeaders();
    return this._http.get(`${this.url}/subscriptions/cancel/${token}`,{ headers: headers });
  }









  generateAuthHeaders() {
    const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQYXltZW50U2VydmljZVByb3ZpZGVyIiwiY2xpZW50SWQiOiIxMjM0NTY3ODkiLCJleHAiOjE2NzU5MTg1NDd9.FaZcMIPs1vtuxpmZo_NLiA7eKUAT99PFS8r4Erv92Ck'
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + jwt,
    });
    return headers;
  }
}
