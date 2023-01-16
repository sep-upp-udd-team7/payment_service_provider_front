import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authUrl } from '../app-global';
import { WebShopUrl } from '../model/WebShopUrl';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class WebshopService {
  constructor(private _http: HttpClient,private authService:AuthService) {}

  private url = authUrl;

  getWebShopUrls(shopId: string) {
    const headers = this.authService.generateAuthHeaders();
    return this._http.get<WebShopUrl>(`${this.url}/web-shop-url/${shopId}`,{headers:headers});
  }

  confirmPayment(shopId: string, transactionId: string) {
    this.getWebShopUrls(shopId).subscribe(
      (data) => {
        const headers = this.authService.generateAuthHeaders();
        this._http
          .get<any>(`${data.successUrl}/${transactionId}`,{headers:headers})
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
        const headers = this.authService.generateAuthHeaders();
        this._http
          .get<any>(`${data.cancelUrl}/${transactionId}`,{headers:headers})
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
