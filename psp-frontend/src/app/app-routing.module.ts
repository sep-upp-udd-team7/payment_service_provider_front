import { MerchantInfoQrCodeComponent } from './components/merchant-info-qr-code/merchant-info-qr-code.component';
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
import { RegistrationComponent } from './components/registration/registration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ShopProfileComponent } from './components/shop-profile/shop-profile.component';
import { RegisterPaypalPaymentComponent } from './components/register-paypal-payment/register-paypal-payment.component';
import { RegisterCryptoPaymentComponent } from './components/register-crypto-payment/register-crypto-payment.component';
import { CryptoProcessingComponent } from './components/crypto-processing/crypto-processing.component';
import { CryptoCancelComponent } from './components/crypto-cancel/crypto-cancel.component';
import { PaypalSubscriptionConfirmComponent } from './components/paypal-subscription-confirm/paypal-subscription-confirm.component';
import { PaypalSubscriptionCanceledComponent } from './components/paypal-subscription-canceled/paypal-subscription-canceled.component';
import { AuthGuard } from './service/auth.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    pathMatch: 'full',
  },

  // {
  //   path: 'signup',
  //   component: SignUpComponent,
  // },
  // {
  //   path: 'personal-info',
  //   component: PersonalInfoComponent,
  // },
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
    path: 'add-bank/:id',
    component: MerchantInfoComponent,
    canActivate: [AuthGuard],
    data: { role: ['WEB_SHOP_ADMIN'] }
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
  {
    path: "new-payment-option",
    component: NewPaymentOptionComponent,
    canActivate: [AuthGuard],
    data: { role: ['WEB_SHOP_ADMIN'] }
  },
  {
    path: 'add-qr/:id',
    component: MerchantInfoQrCodeComponent,
    canActivate: [AuthGuard],
    data: { role: ['WEB_SHOP_ADMIN'] }
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path:'login',
    component: SignInComponent
  },
  {
    path:'profile',
    component: ShopProfileComponent,
    canActivate: [AuthGuard],
    data: { role: ['WEB_SHOP_ADMIN'] }
  },

  {
    path:'add-paypal/:id',
    component: RegisterPaypalPaymentComponent,
    canActivate: [AuthGuard],
    data: { role: ['WEB_SHOP_ADMIN'] }
  },

  {
    path:'add-crypto/:id',
    component: RegisterCryptoPaymentComponent,
    canActivate: [AuthGuard],
    data: { role: ['WEB_SHOP_ADMIN'] }
  },
  {
    path: 'crypto-success/:orderId',
    component: CryptoProcessingComponent,
  },
  {
    path: 'crypto-cancel/:orderId',
    component: CryptoCancelComponent,
  },
  {
    path:'confirm-subscription',
    component:PaypalSubscriptionConfirmComponent
  },
  {
    path:'cancel-subscription',
    component:PaypalSubscriptionCanceledComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
