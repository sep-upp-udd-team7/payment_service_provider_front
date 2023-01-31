import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from 'src/app/service/paypal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paypal-subscription-canceled',
  templateUrl: './paypal-subscription-canceled.component.html',
  styleUrls: ['./paypal-subscription-canceled.component.scss']
})
export class PaypalSubscriptionCanceledComponent implements OnInit {

  constructor(
    private paypalService: PaypalService,
    private route: ActivatedRoute
  ) {}

  token: string = '';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.token = params['token'];
      this.paypalService.cancelSubscription(this.token).subscribe(
      data=>{
        window.location.href=environment.shopUrl+'/cancel-subscription?token='+this.token;
      }
      ,(error)=>{
        alert('Something went wrong');
      });
    });
  }

}
