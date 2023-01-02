import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from 'src/app/model/Bank';
import { CreditCardService } from 'src/app/service/credit-card.service';

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
    this.creditCardService.registerMerchant(reqBody).subscribe(
      data => {
        alert('Your web shop is registered for a new payment method - via bank')
        this.router.navigate([''])
      }, 
      err => {
        alert(err.error)
        console.log(err.error)
      })
  }

}
