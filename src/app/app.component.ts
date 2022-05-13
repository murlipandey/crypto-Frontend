import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {routeNames} from './route-name';
import {SignUpComponent} from  './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ComplainBoxComponent } from './complain-box/complain-box.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'demoApp';
  constructor(private router:Router){
 
  };
  ngOnInit() :void
  { 
  
  }

   forgetPassword():void
  {
  //  this.router.navigate([routeNames.FORGETPWD]);
  }
   signup():void
  {
   // this.router.navigate([routeNames.SIGNUPFORM]);
  }
  loginPage():void
  {
   // this.router.navigate([routeNames.HOMEPAGE]);
  }
}
