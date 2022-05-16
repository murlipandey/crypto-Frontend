import { Injectable } from "@angular/core";
import { SharedServiceService } from '../shared/shared-service.service';

@Injectable({ providedIn: 'root' })

export class SignUp {
    public userId: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public mobileNumber: string;
    public emailId: string;
    public addressLine1: string;
    public addressLine2: string;
    public addressLine3: string;
    public city: string;
    public state: string;
    public country: string;
    public zip: string;
    public zip4: string;
    public aadharNumber: string;
    public balance : string;
}

export class SignUpDto {
    constructor(public sharedservice: SharedServiceService) { }

    getSignUp(): SignUp {
        const signupdata: SignUp = {
            userId: this.sharedservice.getUserID(),
            password: this.sharedservice.getPassword(),
            firstName: this.sharedservice.getFirstName(),
            lastName: this.sharedservice.getLastName(),
            mobileNumber: this.sharedservice.getMobileNumber(),
            emailId: this.sharedservice.getemailId(),
            addressLine1: this.sharedservice.getaddressLine1(),
            addressLine2: this.sharedservice.getaddressLine2(),
            addressLine3: this.sharedservice.getaddressLine3(),
            city: this.sharedservice.getCity(),
            state: this.sharedservice.getState(),
            country: this.sharedservice.getCountry(),
            zip: this.sharedservice.getZip(),
            zip4: this.sharedservice.getZip4(),
            aadharNumber: this.sharedservice.getAadharNumber(),
            balance:this.sharedservice.getBalance(),
        };
        return signupdata;
    }
}