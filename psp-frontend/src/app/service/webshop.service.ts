import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authUrl } from '../app-global';
import { AddNewPaymentMethod } from '../model/AddNewPaymentMethod';
import { Login } from '../model/Login';
import { LoginResponse } from '../model/LoginResponse';
import { PaymentMethod } from '../model/PaymentMethod';
import { PaymentMethodProfile } from '../model/PaymentMethodProfile';
import { Registration } from '../model/Registration';
import { RegistrationResponse } from '../model/RegistrationResponse';
import { ShopProfile } from '../model/ShopProfile';
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
      (data) => 
      // {
      //   const headers = this.authService.generateAuthHeaders();
      //   this._http
      //     .get<any>(`${data.successUrl}/${transactionId}`,{headers:headers})
      //     .subscribe(
      //       (data)=>{
      //         window.location.href = '/paypal-success?shop_id=' + shopId;
      //       },
      //       (error) => {
      //       alert('Error1');
      //     });
      // },
      {
        console.log(data.successUrl);
        window.location.href=data.successUrl+'/'+transactionId;
      },
      (error) => 
      {
        alert('Error2');
      }
    );
  }

  cancelPayment(shopId: string, transactionId: string) {
    this.getWebShopUrls(shopId).subscribe(
      (data) => 
      // {
      //   const headers = this.authService.generateAuthHeaders();
      //   this._http
      //     .get<any>(`${data.cancelUrl}/${transactionId}`,{headers:headers})
      //     .subscribe(
      //       (data)=>{
      //         alert('Succesfully canceled');
      //       },
      //       (error) => {
      //       alert('Error');
      //     });
      // },
      {
        console.log(data.successUrl);
        window.location.href=data.cancelUrl+'/'+transactionId;
      },
      (error) => {
        alert('Error');
      }
    );
  }

  loadPaymentOptions(shopId:string){
    const headers=this.authService.generateAuthHeaders();
    return this._http.get<PaymentMethod[]>(`${this.url}/payment-methods/${shopId}`,{headers:headers});
  }

  registerShop(data:Registration){
    return this._http.post<RegistrationResponse>(`${this.url}/register-shop`,data)
  }

  login(data:Login){
    return this._http.post<LoginResponse>(`${this.url}/login`,data)
  }

  loadPaymentOptionsForProfile(){
    const headers=this.authService.generateAuthHeaders();
    const shopId=localStorage.getItem('shopId');
    return this._http.get<PaymentMethodProfile[]>(`${this.url}/profile-payment-options/${shopId}`,{headers:headers})
  }

  loadShopProfileInfo(){
    const headers=this.authService.generateAuthHeaders();
    const shopId=localStorage.getItem('shopId');
    return this._http.get<ShopProfile>(`${this.url}/shops/${shopId}`,{headers:headers})
  }

  removePaymentMethod(paymentMethodId:number){
    const headers=this.authService.generateAuthHeaders();
    const shopId=localStorage.getItem('shopId');
    const body={
      'shopId':shopId,
      'paymentMethodId':paymentMethodId
    }
    return this._http.post(`${this.url}/remove-payment-method`,body,{headers:headers})
  }

  addPaymentMethod(data:AddNewPaymentMethod){
    const headers=this.authService.generateAuthHeaders();
    console.log(headers);
    return this._http.post(`${this.url}/add-payment-method`,data,{headers:headers})
  }
}
