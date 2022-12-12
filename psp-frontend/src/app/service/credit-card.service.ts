import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { bankUrl, pspUrl } from '../app-global';
import { Bank } from '../model/Bank';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }

  private bankController = bankUrl + '/banks';
  private acquirerController = bankUrl + '/acquirers'
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getBanks() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   });
    return this.http.get<Bank[]>(this.bankController + '/getAll', {headers: headers} )
  }

  registerMerchant(body: any) {
    return this.http.post<any>(this.acquirerController + '/register', body, this.httpOptions)
  }
}
