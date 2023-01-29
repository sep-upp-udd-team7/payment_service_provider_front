import { Component, OnInit } from '@angular/core';
import { PaymentMethodProfile } from '../../model/PaymentMethodProfile';
import { ShopProfile } from '../../model/ShopProfile';
import { WebshopService } from '../../service/webshop.service';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.scss'],
})
export class ShopProfileComponent implements OnInit {
  paymentMethods: PaymentMethodProfile[] = [];
  profile: ShopProfile = {
    name: '',
    mail: '',
    shopId: '',
    successUrl: '',
    cancelUrl: '',
    returnUrl: '',
  };
  constructor(private shopService: WebshopService) {}

  ngOnInit(): void {
    this.shopService.loadPaymentOptionsForProfile().subscribe((data) => {
      this.paymentMethods = data;
    });
    this.shopService.loadShopProfileInfo().subscribe((data) => {
      console.log(data);
      this.profile = data;
    });
  }

  subscribe(method: PaymentMethodProfile) {
    if (method.name=="PAYPAL"){
      const location='add-paypal/'+method.id;
      window.location.replace(location);
    }

    if (method.name=="CRYPTO"){
      const location='add-crypto/'+method.id;
      window.location.replace(location);
    }
    if (method.name=="BANK"){
      const location='add-bank/'+method.id;
      window.location.replace(location);
    }
    if (method.name=="QR_CODE"){
      const location='add-qr/'+method.id;
      window.location.replace(location);
    }
    
  }

  unsubscribe(method: PaymentMethodProfile) {
    this.shopService.removePaymentMethod(method.id).subscribe((data) => {
      for(let i=0;i<this.paymentMethods.length;i++){
        if (this.paymentMethods[i].id==method.id){
          this.paymentMethods[i].canSubscribe=!this.paymentMethods[i].canSubscribe;
        }
      }
    });
  }
}
