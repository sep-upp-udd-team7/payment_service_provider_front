import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authUrl } from '../app-global';
import { WebShopUrl } from '../model/WebShopUrl';

@Injectable({
  providedIn: 'root',
})
export class WebshopService {
  constructor(private _http: HttpClient) {}

  private url = authUrl;

  getWebShopUrls(shopId: string) {
    return this._http.get<WebShopUrl>(`${this.url}/web-shop-url/${shopId}`);
  }

  confirmPayment(shopId: string, transactionId: string) {
    this.getWebShopUrls(shopId).subscribe(
      (data) => {
        this._http
          .get<any>(`${data.successUrl}/${transactionId}`)
          .subscribe(
            (data)=>{
              window.location.href = '/paypal-success?shop_id=' + shopId;
            },
            (error) => {
            alert('Error1');
          });
      },
      (error) => {
        alert('Error2');
      }
    );
  }

  cancelPayment(shopId: string, transactionId: string) {
    this.getWebShopUrls(shopId).subscribe(
      (data) => {
        this._http
          .get<any>(`${data.cancelUrl}/${transactionId}`)
          .subscribe(
            (data)=>{
              alert('Succesfully canceled');
            },
            (error) => {
            alert('Error');
          });
      },
      (error) => {
        alert('Error');
      }
    );
  }
}
