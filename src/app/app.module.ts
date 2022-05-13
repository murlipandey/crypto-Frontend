import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ComplainBoxComponent } from './complain-box/complain-box.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {routeNames} from './route-name';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import {HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ComplainBoxComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgxPaginationModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
