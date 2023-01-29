import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddNewPaymentMethod } from '../../model/AddNewPaymentMethod';
import { WebshopService } from '../../service/webshop.service';

@Component({
  selector: 'app-register-crypto-payment',
  templateUrl: './register-crypto-payment.component.html',
  styleUrls: ['./register-crypto-payment.component.scss']
})
export class RegisterCryptoPaymentComponent implements OnInit {

  hide = true;
  paymentMethodId:number;
  addingPaymentData:AddNewPaymentMethod={
    shopId: '',
    paymentMethodId: 0,
    paymentApiClientId: '',
    paymentApiSecret: ''
  }
  constructor(private route: ActivatedRoute,private webShopService:WebshopService) { }

  ngOnInit(): void {
    this.route.params.subscribe((v) => {
      this.paymentMethodId = v['id'];
      console.log('payment method id',this.paymentMethodId);
      console.log(v);
    })
    this.addingPaymentData.paymentMethodId=this.paymentMethodId;
    this.addingPaymentData.shopId=localStorage.getItem('shopId');
    

  }

  addCryptoMethod(){
    this.webShopService.addPaymentMethod(this.addingPaymentData).subscribe(data=>{
      alert('Payment Successfully Added')
      window.location.replace('/profile');
    })
  }

}
