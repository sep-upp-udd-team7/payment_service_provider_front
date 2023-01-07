import { Router } from '@angular/router';
import { CreditCardService } from 'src/app/service/credit-card.service';
import { Bank } from './../../model/Bank';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-info-qr-code',
  templateUrl: './merchant-info-qr-code.component.html',
  styleUrls: ['./merchant-info-qr-code.component.scss']
})
export class MerchantInfoQrCodeComponent implements OnInit {

  constructor(private creditCardService: CreditCardService, private router: Router) { }

  ngOnInit(): void {
    this.creditCardService.getBanks().subscribe(
      data => {
        console.log(data)
        this.banks = data;
      })
  }

  merchantId: string = '';
  merchantPassword: string = '';
  apiKey: string = '';
  hide = true;
  selectedValue: string;

  banks: Bank[] = [];

  enterMerchantInfos() {
    if (this.merchantId == '' || this.merchantPassword == '') {
      return
    }
    let body = {
      "id": "",
      "merchantId": this.merchantId,
      "merchantPassword": this.merchantPassword,
      "bank": this.selectedValue
    }
    let reqBody = JSON.stringify(body)
    console.log(reqBody)
    this.creditCardService.registerQrCodeMethod(reqBody).subscribe(
      data => {
        alert('Your web shop is registered for a new payment method - via QR code')
        this.router.navigate([''])
      }, 
      err => {
        alert(err.error)
        console.log(err.error)
      })
  }
}
