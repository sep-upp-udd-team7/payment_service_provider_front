import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from 'src/app/service/paypal.service';

@Component({
  selector: 'app-subscription-processing',
  templateUrl: './subscription-processing.component.html',
  styleUrls: ['./subscription-processing.component.scss']
})
export class SubscriptionProcessingComponent implements OnInit {

  constructor(private paypalService:PaypalService,private route: ActivatedRoute) { }

  token:string='';

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.token=params['token'];
        this.paypalService.confirmSubscription(this.token).subscribe((response)=>{
          window.location.href="/paypal-success";
        },
        (error)=>{
          window.location.href="/internal-error"
        })
      }
    );
  }

}
