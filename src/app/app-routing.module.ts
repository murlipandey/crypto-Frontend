import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {routeNames} from './route-name';
import { AppComponent } from './app.component';
import {SignUpComponent} from  './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ComplainBoxComponent } from './complain-box/complain-box.component';
import { LoginPageComponent } from 'src/app/login-page/login-page.component';
import { PaymentComponent } from './payment/payment/payment.component';

const DEFAULTPATH=routeNames.LOGINFORM;

export const routes: Routes = [
  { path:'',component: LoginPageComponent},
  {path:DEFAULTPATH,component: LoginPageComponent},
  {path:routeNames.SIGNUPFORM,component:SignUpComponent},
  {path:routeNames.FORGETPWD,component:ForgetPasswordComponent},
  {path:routeNames.COMPLAIN,component:ComplainBoxComponent},
  {path:routeNames.HOMEPAGE,component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
