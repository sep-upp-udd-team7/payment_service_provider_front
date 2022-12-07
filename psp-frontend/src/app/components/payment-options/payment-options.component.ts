import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { PaypalService } from 'src/app/service/paypal.service';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss'],
})
export class PaymentOptionsComponent implements OnInit {
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
  constructor(private paypalService: PaypalService, private router: Router) {}

  ngOnInit(): void {}

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
      this.paypalService.createPayment().subscribe((data)=>{alert('OK'),window.location.href=data.url},(error)=>{
        alert('Greska');
      });
    }
    if (this.selectedBankCard) {
      // Ako je acquirer -> unosi merchant podatke
      this.router.navigate(['merchant-info']);
      // Ako je issuer -> redirektuje se na sajt banke PRODAVCA - unosi PAN, cvv itd.
    }
  }
}
