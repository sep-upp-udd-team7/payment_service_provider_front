import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from 'src/app/service/paypal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paypal-subscription-confirm',
  templateUrl: './paypal-subscription-confirm.component.html',
  styleUrls: ['./paypal-subscription-confirm.component.scss'],
})
export class PaypalSubscriptionConfirmComponent implements OnInit {
  constructor(
    private paypalService: PaypalService,
    private route: ActivatedRoute
  ) {}

  token: string = '';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.token = params['token'];
      this.paypalService.executeSubscription(this.token).subscribe(
      data=>{
        window.location.href=environment.shopUrl+'/confirm-subscription?token='+this.token;
      }
      ,(error)=>{
        alert('Something went wrong');
      });
    });
  }
}
