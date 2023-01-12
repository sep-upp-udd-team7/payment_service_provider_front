import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cryptoUrl } from '../app-global';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private url = cryptoUrl;

  constructor(private _http: HttpClient) {

  }

  createOrder(amount:string,transactionId:string,shopId:string, title:string){
    let body={
      "amount":amount,
      "transactionId":transactionId,
      "shopId": shopId,
      "title": title
    }
    
    return this._http.post<any>(`${this.url}/create-order`,body);
  }
}
