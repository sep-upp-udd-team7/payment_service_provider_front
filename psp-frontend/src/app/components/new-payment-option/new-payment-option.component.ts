import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaypalService } from 'src/app/service/paypal.service';

@Component({
  selector: 'app-new-payment-option',
  templateUrl: './new-payment-option.component.html',
  styleUrls: ['./new-payment-option.component.scss']
})
export class NewPaymentOptionComponent implements OnInit {

  constructor(private paypalService: PaypalService, private router: Router) {}

  ngOnInit(): void {
  }

  selectedPaypal: boolean = false;
  selectedCrypto: boolean = false;
  selectedBankCard: boolean = false;
  selectedQr: boolean = false;

  validate(): boolean {
    let isValid = true;
    if (
      this.selectedBankCard == false &&
      this.selectedCrypto == false &&
      this.selectedPaypal == false &&
      this.selectedQr == false
    ) {
      alert('Select Payment method');
      isValid = false;
    }
    return isValid;
  }

  qrPaymentSelected() {
    this.selectedQr = !this.selectedQr;
    this.selectedCrypto = false;
    this.selectedBankCard = false;
    this.selectedPaypal = false;
  }

  paypalPaymentSelected() {
    this.selectedPaypal = !this.selectedPaypal;
    this.selectedCrypto = false;
    this.selectedBankCard = false;
    this.selectedQr = false;
  }

  cryptoPaymentSelected() {
    this.selectedCrypto = !this.selectedCrypto;
    this.selectedPaypal = false;
    this.selectedBankCard = false;
    this.selectedQr = false;
  }

  bankCardPaymentSelected() {
    this.selectedBankCard = !this.selectedBankCard;
    this.selectedPaypal = false;
    this.selectedCrypto = false;
    this.selectedQr = false;
  }

  proceed() {
    this.validate();
    if (this.selectedPaypal) {
    }
    if (this.selectedBankCard) {
      this.router.navigate(['merchant-info']);
    }
  }

}
