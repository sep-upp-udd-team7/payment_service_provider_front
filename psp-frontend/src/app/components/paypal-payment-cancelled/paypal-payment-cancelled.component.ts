import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from 'src/app/service/paypal.service';
import { WebshopService } from 'src/app/service/webshop.service';

@Component({
  selector: 'app-paypal-payment-cancelled',
  templateUrl: './paypal-payment-cancelled.component.html',
  styleUrls: ['./paypal-payment-cancelled.component.scss'],
})
export class PaypalPaymentCancelledComponent implements OnInit {
  constructor(
    private paypalService: PaypalService,
    private route: ActivatedRoute,
    private webShopService: WebshopService
  ) {}

  private transactionId: string = '';
  private shopId: string = '';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.transactionId = params['transaction_id'];
      this.shopId = params['shop_id'];
      this.paypalService.cancelPayment(this.transactionId).subscribe(
        (response) => {
          this.webShopService.cancelPayment(this.shopId, this.transactionId);
        },
        (error) => {
          alert('Error 1');
          //window.location.href = '/internal-error';
        }
      );
    });
  }
}
