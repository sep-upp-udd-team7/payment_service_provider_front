import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';
import { CreditCardService } from 'src/app/service/credit-card.service';
import { CryptoService } from 'src/app/service/crypto.service';
import { PaypalService } from 'src/app/service/paypal.service';
import { WebshopService } from '../../service/webshop.service';

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
  token: string = '';
  amount: string = '';
  transactionId: string = '';
  shopId: string = '';
  merchantId: string = '';
  accessToken: string = '';
  paypalAvailable=false;
  qrAvailable=false;
  bankAvailable=false;
  cryptoAvailable=false;

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
  constructor(
    private paypalService: PaypalService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private creditCardService: CreditCardService,
    private cryptoService: CryptoService,
    private webShopService:WebshopService
  ) {}

  ngOnInit(): void {
    //take token and decode it to get data
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.token = params['token'];
      this.authService.decodeToken(this.token).subscribe(
        (response) => {
          //need to load available payment methods
          
          this.amount = response.amount;
          this.transactionId = response.transactionId;
          this.shopId = response.shopId;
          this.accessToken = response.accessToken;
          this.webShopService.loadPaymentOptions(response.shopId).subscribe((response)=>{
              response.map(data=>{this.checkOption(data.name)})
          })
          this.authService.saveAccessTokenToLocalStorage(this.accessToken);
        },
        (error) => {
          alert('Something went wrong with token decoding');
        }
      );
    });
  }

  checkOption(option:string){
    if(option=='PAYPAL'){
      this.paypalAvailable=true;
    }else if(option=='BANK'){
      this.bankAvailable=true;
    }else if(option=='CRYPTO'){
      this.cryptoAvailable=true;
    }else if(option=='QR_CODE'){
      this.qrAvailable=true;
    }
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
      this.paypalService
        .createPayment(this.amount, this.transactionId, this.shopId)
        .subscribe(
          (data) => {
            alert('OK'), (window.location.href = data.url);
          },
          (error) => {
            alert('Greska');
          }
        );
    }
    if (this.selectedBankCard || this.selectedQr) {
      // http zahtev da se validira acquirer
      let body = {
        merchantOrderId: this.transactionId,
        amount: this.amount,
        merchantTimestamp: new Date(),
        shopId: this.shopId,
        qrCode: this.selectedQr,
      };
      this.creditCardService.validateAcquirer(JSON.stringify(body)).subscribe(
        (data) => {
          console.log(data);
          window.location.href = data.paymentUrl;
        },
        (error) => {
          alert('Greska');
          if (error.error.includes('http')) {
            window.location.href = error.error;
          }
        }
      );
    } else if (this.selectedCrypto) {
      this.cryptoService
        .createOrder(this.amount, this.transactionId, this.shopId, '')
        .subscribe(
          (data) => {
            alert('Crypto order created');
            window.location.href = data.payment_url;
          },
          (error) => {
            alert('Error: ' + error);
          }
        );
    }
  }
}
