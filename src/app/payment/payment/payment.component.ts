import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {routeNames} from '../../route-name';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  
  title="Payment Crypto Currency"
  constructor(private http : HttpClient, private router:Router) { }

  ngOnInit() {
  }
private address:string;
private amount:string;
private Timestamp:string;
private transactionID:string;
private MobileNumber:string;
private digitalSignature:string;


  payment():void{
    let headers = new HttpHeaders();
    //var obj:jsondata;
    this.address= (<HTMLInputElement>document.getElementById("address")).value;
    this.amount = (<HTMLInputElement>document.getElementById("amount")).value;
    this.Timestamp= (<HTMLInputElement>document.getElementById("Timestamp")).value;
    this.transactionID = (<HTMLInputElement>document.getElementById("transactionID")).value;
    this.MobileNumber = (<HTMLInputElement>document.getElementById("MobileNumber")).value;
    this.digitalSignature = (<HTMLInputElement>document.getElementById("digitalSignature")).value;
    
    const headerDict = {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
       'Access-Control-Allow-Origin': '*'
       
     }
   
     const requestOptions = {                                                                                                                                                                                 
       headers: new HttpHeaders(headerDict), 
     };
     
     var data = {
address:this.address,
amount:this.amount,
Timestamp:this.Timestamp,
transactionID:this.transactionID,
MobileNumber:this.MobileNumber,
digitalSignature:this.digitalSignature

       };
       var obj:any;
       //murli
       
     this.http.post("http://localhost:8003/payment" ,data,requestOptions)
     .subscribe(
       (res) => {
        obj =  res;
 
         
        
         if(obj.message == "payment successful")
         {
          alert("Payment Done");
 
         }
         else
         {
           alert(obj.message);
         }
     },
     err => console.log(err)
 
     ); 
   }

// Need to read value from QR code for Merchant 
   QRCodepayment():void{
         
    var data = {
      address:this.address,
      amount:this.amount,
      Timestamp:this.Timestamp,
      transactionID:this.transactionID,
      MobileNumber:this.MobileNumber,
      digitalSignature:this.digitalSignature
      
             };


             const headerDict = {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*'
              
            }
             var obj:any;
             const requestOptions = {                                                                                                                                                                                 
              headers: new HttpHeaders(headerDict), 
            };
            
             
           this.http.post("http://localhost:8003/payment" ,data,requestOptions)
           .subscribe(
             (res) => {
              obj =  res;
       
               
              
               if(obj.message == "payment successful")
               {
                alert("Payment Done");
       
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
