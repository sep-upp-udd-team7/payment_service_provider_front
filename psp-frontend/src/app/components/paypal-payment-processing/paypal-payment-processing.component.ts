import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExecutePaypalPayment } from 'src/app/model/ExecutePaypalPayment';
import { PaypalService } from 'src/app/service/paypal.service';

@Component({
  selector: 'app-paypal-payment-processing',
  templateUrl: './paypal-payment-processing.component.html',
  styleUrls: ['./paypal-payment-processing.component.scss']
})
export class PaypalPaymentProcessingComponent implements OnInit {

  constructor(private paypalService:PaypalService,private route: ActivatedRoute) { }

  private transactionId:string='';
  private paymentId:string='';
  private payerId:string='';

  

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.transactionId=params['transaction_id'];
        this.payerId=params['PayerID'];
        this.paymentId=params['paymentId'];
        let body:ExecutePaypalPayment={
          payerId:this.payerId,
          paymentId:this.paymentId,
          transactionId:this.transactionId,
        }
        this.paypalService.executePayment(body).subscribe((response)=>{
          window.location.href="/paypal-success";
        },
        (error)=>{
          window.location.href="/internal-error"
        })
      }
    );
  }

}
