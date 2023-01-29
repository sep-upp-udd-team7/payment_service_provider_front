import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from 'src/app/model/Bank';
import { CreditCardService } from 'src/app/service/credit-card.service';
import { AddNewPaymentMethod } from '../../model/AddNewPaymentMethod';
import { WebshopService } from '../../service/webshop.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-merchant-info',
  templateUrl: './merchant-info.component.html',
  styleUrls: ['./merchant-info.component.scss']
})
export class MerchantInfoComponent implements OnInit {

  constructor(private creditCardService: CreditCardService, private router: Router,private route:ActivatedRoute,private webShopService:WebshopService) { }

  paymentMethodId:number=0;
  
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
    this.creditCardService.registerMerchant(reqBody).subscribe(
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
