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
    MerchantInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
    
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
