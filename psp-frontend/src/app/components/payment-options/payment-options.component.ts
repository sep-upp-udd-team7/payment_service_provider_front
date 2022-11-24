import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  selectedPaypal:boolean=false;
  selectedCrypto:boolean=false;
  selectedBankCard:boolean=false;
  selectedQr:boolean=false;

  validate(){
    if (this.selectedBankCard==false && this.selectedCrypto==false && this.selectedPaypal==false && this.selectedQr==false){
      alert('Select Payment method');
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  qrPaymentSelected(){
    this.selectedQr=!this.selectedQr;
    this.selectedCrypto=false;
    this.selectedBankCard=false;
    this.selectedPaypal=false;
  }

  paypalPaymentSelected(){
    this.selectedPaypal=!this.selectedPaypal;
    this.selectedCrypto=false;
    this.selectedBankCard=false;
    this.selectedQr=false;
  }

  cryptoPaymentSelected(){
    this.selectedCrypto=!this.selectedCrypto;
    this.selectedPaypal=false;
    this.selectedBankCard=false;
    this.selectedQr=false;
  }

  bankCardPaymentSelected(){
    this.selectedBankCard=!this.selectedBankCard;
    this.selectedPaypal=false;
    this.selectedCrypto=false;
    this.selectedQr=false;
  }

  proceed(){
    this.validate()
  }
}
