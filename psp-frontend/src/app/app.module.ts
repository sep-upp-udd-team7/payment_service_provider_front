import { TokenInterceptor } from './interceptor/token-interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PaypalSuccessComponent } from './components/paypal-success/paypal-success.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaypalPaymentProcessingComponent } from './components/paypal-payment-processing/paypal-payment-processing.component';
import { PaypalPaymentCancelledComponent } from './components/paypal-payment-cancelled/paypal-payment-cancelled.component';
import { InternalErrorComponent } from './components/internal-error/internal-error.component';
import { MerchantInfoComponent } from './components/merchant-info/merchant-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input';
import { NewPaymentOptionComponent } from './components/new-payment-option/new-payment-option.component';
import { MatSelectModule } from '@angular/material/select';
import { BankCancelComponent } from './components/bank-cancel/bank-cancel.component';
import { BankSuccessComponent } from './components/bank-success/bank-success.component';
import { BankFailedComponent } from './components/bank-failed/bank-failed.component';
import { MerchantInfoQrCodeComponent } from './components/merchant-info-qr-code/merchant-info-qr-code.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ShopProfileComponent } from './components/shop-profile/shop-profile.component';
import { RegisterPaypalPaymentComponent } from './components/register-paypal-payment/register-paypal-payment.component';
import { RegisterCryptoPaymentComponent } from './components/register-crypto-payment/register-crypto-payment.component';
import { CryptoCancelComponent } from './components/crypto-cancel/crypto-cancel.component';
import { CryptoProcessingComponent } from './components/crypto-processing/crypto-processing.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PersonalInfoComponent,
    PaypalSuccessComponent,
    PaymentOptionsComponent,
    PaypalPaymentProcessingComponent,
    PaypalPaymentCancelledComponent,
    InternalErrorComponent,
    MerchantInfoComponent,
    NewPaymentOptionComponent,
    BankCancelComponent,
    BankSuccessComponent,
    BankFailedComponent,
    MerchantInfoQrCodeComponent,
    RegistrationComponent,
    SignInComponent,
    ShopProfileComponent,
    RegisterPaypalPaymentComponent,
    RegisterCryptoPaymentComponent,
    CryptoCancelComponent,
    CryptoProcessingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, 
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
