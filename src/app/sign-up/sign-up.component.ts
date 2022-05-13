import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { routeNames } from '../route-name';
import { updateBinding } from '@angular/core/src/render3/instructions';
import { SharedServiceService } from '../shared/shared-service.service';
import { SignUpDto } from './sign-up-DTO';
import { HttpHeaders, HttpClient } from '@angular/common/http'




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient, public sharedservice: SharedServiceService, private router: Router) { }

  ngOnInit() {
  }
  public BackButton() {
    this.router.navigate([routeNames.LOGINFORM]);
  }

 public signup() {
    //let headers = new HttpHeaders();
    let signupdto = new SignUpDto(this.sharedservice);
    const body = signupdto.getSignUp();


    let headers = new HttpHeaders();

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
    
    var obj:any;
    this.http.post("http://localhost:8001/signup" ,body,requestOptions)
    
      .subscribe(
      (res) => {
        obj =  res;

        
       
        if(obj.message == "User registered successfully")
        {
          this.router.navigate([routeNames.LOGINFORM]);

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

}
