import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaypalSuccessComponent } from './components/paypal-success/paypal-success.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';

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
    path:'paypal-success',
    component:PaypalSuccessComponent
  },
  {
    path:'select-payment-option',
    component:PaymentOptionsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
