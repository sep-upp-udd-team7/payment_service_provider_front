import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { paypalUrl } from '../app-global';
import { CreatePaypalPayment } from '../model/CreatePaypalPayment';
import { ExecutePaypalPayment } from '../model/ExecutePaypalPayment';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {
  
  
  private url=paypalUrl;

  constructor(private _http: HttpClient) {

   }

  createPayment(){
    let body:CreatePaypalPayment={
      amount:1
    }
    
    return this._http.post<any>(`${this.url}/create-payment`,body);
  }

  executePayment(body:ExecutePaypalPayment){
    return this._http.post<any>(`${this.url}/execute`,body);
  }

  test(){
    return this._http.get<any>("localhost:8000/test");
  }

  cancelPayment(trancationId:string){
    return this._http.get(`${this.url}/execute/${trancationId}`);
  }

  confirmSubscription(token: string) {
    return this._http.get(`${this.url}/subscriptions/execute/${token}`);
  }
}
