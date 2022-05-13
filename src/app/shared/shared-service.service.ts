import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedServiceService {
  private userId:string;
  private password:string;
  private firstName:string;
  private lastName:string;
  private mobileNumber:string;
  private emailId:string;
  private lastAddressLine1:string;
  private addressLine1:string;
  private addressLine2:string;
  private addressLine3:string;
  private city:string;
  private state:string;
  private country:string;
  private zip:string;
  private zip4:string;
  private aadharNumber:string;

  constructor() { }

  setUserID(UserID: string){
    this.userId = UserID;
  }
  setPassword(Password: string){
    this.password = Password;
  }
  setFirstName(FirstName: string){
    this.firstName = FirstName;
  }
  setLastName(LastName: string){
    this.lastName = LastName;
  }
  setMobileNumber(MobileNumber: string){
    this.mobileNumber = MobileNumber;
  }
  setemailId(emailId: string){
    this.emailId = emailId;
  }
  setLastAddressLine1(LastAddressLine1: string){
    this.lastAddressLine1 = LastAddressLine1;
  }
  setAddressLine2(AddressLine2: string){
    this.addressLine2 = AddressLine2;
  }
  setAddressLine3(AddressLine3: string){
    this.addressLine3 = AddressLine3;
  }
  setCity(City: string){
    this.city = City;
  }
  setState(State: string){
    this.state = State;
  }
  setCountry(Country: string){
    this.country = Country;
  }
  setZip(Zip: string){
    this.zip = Zip;
  }
  setZip4(Zip4: string){
    this.zip4 = Zip4;
  }
  setAadharNumber(AadharNumber: string){
    this.aadharNumber = AadharNumber;
  }
 

  getUserID(): string{
    return this.userId;
  }
  getPassword(): string{
    return this.password;
  }
  getFirstName(): string{
    return this.firstName;
  }
  getLastName(): string{
    return this.lastName;
  }
  getMobileNumber(): string{
    return this.mobileNumber;
  }
  getemailId(): string{
    return this.emailId;
  }
  
  getaddressLine1(): string{
    return this.addressLine1;
  }
  getaddressLine2(): string{
    return this.addressLine2;
  }
  getaddressLine3(): string{
    return this.addressLine3;
  }
  getCity(): string{
    return this.city;
  }
  getState(): string{
    return this.state;
  }
  getCountry(): string{
    return this.country;
  }
  getZip(): string{
    return this.zip;
  }
  getZip4(): string{
    return this.zip4;
  }
  getAadharNumber(): string{
    return this.aadharNumber;
  }
}
