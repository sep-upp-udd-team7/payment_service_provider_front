import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { bankUrl, pspUrl } from '../app-global';
import { Bank } from '../model/Bank';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient,private authService:AuthService) { }

  private bankController = bankUrl + '/banks';
  private acquirerController = bankUrl + '/acquirers'
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private creditCardController = bankUrl + '/credit-cards'

  getBanks() {
    const headers = this.authService.generateAuthHeaders();
    return this.http.get<Bank[]>(this.bankController + '/getAll', {headers: headers} )
  }

  registerMerchant(body: any) {
    const headers = this.authService.generateAuthHeaders();
    return this.http.post<any>(this.acquirerController + '/register', body, {headers: headers})
  }

  validateAcquirer(body: any) {
    const headers = this.authService.generateAuthHeaders();
    return this.http.post<any>(this.creditCardController + '/startPayment', body, {headers: headers})
  }

  registerQrCodeMethod(body: any) {
    const headers = this.authService.generateAuthHeaders();
    return this.http.post<any>(this.acquirerController + '/registerQrCode', body, {headers: headers})
  }
}
