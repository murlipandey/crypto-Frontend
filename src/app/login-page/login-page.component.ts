import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {routeNames} from '../route-name';
import {SignUpComponent} from  '../sign-up/sign-up.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { ComplainBoxComponent } from '../complain-box/complain-box.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { analyzeAndValidateNgModules } from '@angular/compiler';
 




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
title="Online Payment Crypto Currency App"
  constructor(private http : HttpClient, private router:Router) { }
public userId:string;
public userpassword:string;
  ngOnInit() {
   // this.router.navigate([routeNames.LOGINFORM]);
  }

  forgetPassword():void
  {
    this.router.navigate([routeNames.FORGETPWD]);
  }
 signup():void
  {
    this.router.navigate([routeNames.SIGNUPFORM]);
  }
  
  loginPage():void{
   let headers = new HttpHeaders();
   //var obj:jsondata;
   this.userId= (<HTMLInputElement>document.getElementById("username")).value;
   this.userpassword = (<HTMLInputElement>document.getElementById("userpassword")).value;
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
      
    }
    //'Access-Control-Allow-Headers': 'Content-Type',
    //5000 Tejas123
    //
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    var data = {
      userId:this.userId,
      password:this.userpassword
      };
      var obj:any;
      //murli
      
    this.http.post("http://localhost:8003/authenticateuser" ,data,requestOptions)
    .subscribe(
      (res) => {
       obj =  res;

        
       
        if(obj.message == "Login Successful")
        {
          this.router.navigate([routeNames.HOMEPAGE]);

        }
        else
        {
          alert(obj.message);
        }
    },
    err => console.log(err)

    ); 
  }


}
