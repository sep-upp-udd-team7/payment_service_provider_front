import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-info',
  templateUrl: './merchant-info.component.html',
  styleUrls: ['./merchant-info.component.scss']
})
export class MerchantInfoComponent implements OnInit {

  constructor() { }

  merchantId: string = '';
  merchantPassword: string = '';
  hide = true;

  ngOnInit(): void {
  }

  enterMerchantInfos() {
    if (this.merchantId == '' || this.merchantPassword == '') {
      return
    }
    alert('TODO')
  }

}
