import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaypalSuccessComponent } from './components/paypal-success/paypal-success.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { PaypalPaymentProcessingComponent } from './components/paypal-payment-processing/paypal-payment-processing.component';
import { PaypalPaymentCancelledComponent } from './components/paypal-payment-cancelled/paypal-payment-cancelled.component';
import { InternalErrorComponent } from './components/internal-error/internal-error.component';
import { MerchantInfoComponent } from './components/merchant-info/merchant-info.component';
import { NewPaymentOptionComponent } from './components/new-payment-option/new-payment-option.component';
import { BankCancelComponent } from './components/bank-cancel/bank-cancel.component';
import { BankSuccessComponent } from './components/bank-success/bank-success.component';
import { BankFailedComponent } from './components/bank-failed/bank-failed.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },

  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'personal-info',
    component: PersonalInfoComponent,
  },
  {
    path: 'paypal-success',
    component: PaypalSuccessComponent,
  },
  {
    path: 'select-payment-option',
    component: PaymentOptionsComponent,
  },
  {
    path: 'paypal-payment-processing',
    component: PaypalPaymentProcessingComponent,
  },
  {
    path: 'cancel-paypal-payment',
    component: PaypalPaymentCancelledComponent,
  },
  {
    path: 'internal-error',
    component: InternalErrorComponent,
  },
  {
    path: 'merchant-info',
    component: MerchantInfoComponent,
  },
  {
    path: 'bank-cancel',
    component: BankCancelComponent
  },
  {
    path: 'bank-success',
    component: BankSuccessComponent,
  },
  {
    path: 'bank-failed',
    component: BankFailedComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
