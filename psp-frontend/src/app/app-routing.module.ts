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
import { SubscriptionProcessingComponent } from './components/subscription-processing/subscription-processing.component';

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
    path:'confirm-subscription',
    component:SubscriptionProcessingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
