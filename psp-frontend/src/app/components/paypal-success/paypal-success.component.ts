import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebshopService } from 'src/app/service/webshop.service';

@Component({
  selector: 'app-paypal-success',
  templateUrl: './paypal-success.component.html',
  styleUrls: ['./paypal-success.component.scss'],
})
export class PaypalSuccessComponent implements OnInit {
  returnUrl: string = '';
  shopId: string = '';
  constructor(
    private route: ActivatedRoute,
    private webShopService: WebshopService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.shopId = params['shop_id'];
      this.webShopService.getWebShopUrls(this.shopId).subscribe((data) => {
        this.returnUrl = data.returnUrl;
        console.log(this.returnUrl);
      });
    });
  }

  continue(){
    window.location.href=this.returnUrl;
  }
}
