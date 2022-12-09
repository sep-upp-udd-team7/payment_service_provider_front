import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  merchantId: string = '';
  merchantPassword: string = '';
  hide = true;
  selectedValue: string;

  banks: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  enterMerchantInfos() {
    if (this.merchantId == '' || this.merchantPassword == '') {
      return
    }
    let body = {
      "merchantId": this.merchantId,
      "merchantPassword": this.merchantPassword,
      "bankName": this.selectedValue
    }
    let reqBody = JSON.stringify(body)
    console.log(reqBody)
    alert('TODO: sacuvati u PSP podatke o web shopu')
  }

}
