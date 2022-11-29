import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from 'src/app/service/paypal.service';

@Component({
  selector: 'app-paypal-payment-cancelled',
  templateUrl: './paypal-payment-cancelled.component.html',
  styleUrls: ['./paypal-payment-cancelled.component.scss']
})
export class PaypalPaymentCancelledComponent implements OnInit {

  constructor(private paypalService:PaypalService,private route: ActivatedRoute) { }

  private transactionId:string='';
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.transactionId=params['transaction_id'];
        this.paypalService.cancelPayment(this.transactionId).subscribe((response)=>{
          alert('Successfully canceled');
        },
        (error)=>{
          window.location.href="/internal-error"
        })
      }
    );
  }

}
