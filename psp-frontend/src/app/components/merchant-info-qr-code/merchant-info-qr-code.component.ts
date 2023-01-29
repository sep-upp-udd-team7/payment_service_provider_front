import { ActivatedRoute, Router } from '@angular/router';
import { CreditCardService } from 'src/app/service/credit-card.service';
import { Bank } from './../../model/Bank';
import { Component, OnInit } from '@angular/core';
import { WebshopService } from '../../service/webshop.service';
import { AddNewPaymentMethod } from '../../model/AddNewPaymentMethod';

@Component({
  selector: 'app-merchant-info-qr-code',
  templateUrl: './merchant-info-qr-code.component.html',
  styleUrls: ['./merchant-info-qr-code.component.scss']
})
export class MerchantInfoQrCodeComponent implements OnInit {

  constructor(private creditCardService: CreditCardService, private router: Router,private webShopService:WebshopService,private route:ActivatedRoute) { }

  paymentMethodId:number;
  addPaymentMethodData:AddNewPaymentMethod={
    shopId: null,
    paymentMethodId: 0,
    paymentApiClientId: '',
    paymentApiSecret: ''
  }

  ngOnInit(): void {
    this.route.params.subscribe((v) => {
      this.paymentMethodId = v['id'];
      console.log('payment method id',this.paymentMethodId);
      console.log(v);
    })
    this.addPaymentMethodData.shopId=localStorage.getItem('shopId');
    this.addPaymentMethodData.paymentMethodId=this.paymentMethodId
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
    const shopId=localStorage.getItem('shopId');
    let body = {
      "shopId":shopId,
      "id": "",
      "merchantId": this.merchantId,
      "merchantPassword": this.merchantPassword,
      "bank": this.selectedValue
    }
    let reqBody = JSON.stringify(body)
    console.log(reqBody)
    this.creditCardService.registerQrCodeMethod(reqBody).subscribe(
      data => {
        this.webShopService.addPaymentMethod(this.addPaymentMethodData).subscribe(data=>{
          alert('Your web shop is registered for a new payment method - via bank')
          this.router.navigate(['/profile'])
        })
      }, 
      err => {
        alert(err.error)
        console.log(err.error)
      })
  }
}
