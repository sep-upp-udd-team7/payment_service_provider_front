import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddNewPaymentMethod } from '../../model/AddNewPaymentMethod';
import { WebshopService } from '../../service/webshop.service';

@Component({
  selector: 'app-register-paypal-payment',
  templateUrl: './register-paypal-payment.component.html',
  styleUrls: ['./register-paypal-payment.component.scss']
})
export class RegisterPaypalPaymentComponent implements OnInit {

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

  addPaypalMethod(){
    this.webShopService.addPaymentMethod(this.addingPaymentData).subscribe(data=>{
      alert('Payment Successfully Added')
      window.location.replace('/profile');
    })
  }

}
