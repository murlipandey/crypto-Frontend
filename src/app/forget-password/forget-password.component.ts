import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {routeNames} from '../route-name';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
public emailId:string;
public password:string;

  constructor(private http : HttpClient,private router:Router) { }

  ngOnInit() {
  }

  public resetPassword():void
  {
    
    let headers = new HttpHeaders();
   //var obj:jsondata;
   this.emailId= (<HTMLInputElement>document.getElementById("emailid")).value;
   this.password = (<HTMLInputElement>document.getElementById("password")).value;
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
      userId:this.emailId,
      password:this.password
      };
      var obj:any;
      this.http.post("http://localhost:8001/forgotPassword" ,data,requestOptions)
    
    .subscribe(
      (res) => {
       obj =  res;

        
       
        if(obj.message == "Password updated successfully")
        {

          this.router.navigate([routeNames.LOGINFORM]);
          alert(obj.message);
        }
        else
        {
          alert(obj.message);
        }
    },
    err => console.log(err)

    ); 
    this.router.navigate([routeNames.LOGINFORM]);
  }




  
  public BackButton()
  {
  this.router.navigate([routeNames.LOGINFORM]);
  }
}
