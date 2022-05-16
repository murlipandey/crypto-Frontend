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
  private Balance:string;
  private amount:string;
  private timestamp:string;
  private transactionID:string;
  private digitalSignature:string;
  private address:string;

  constructor() { }

  setUserID(UserID: string){
    this.userId = UserID;
  }
  setAddress(address:string)
  {
    this.address = address;
  }
  setTimestamp(timestamp:string)
  {
    this.timestamp = timestamp;
  }
  setTransactionID(transactionID:string)
  {
    this.transactionID = transactionID;
  }
  setBalance(Balance: string){
    this.Balance = Balance;
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
  setDigitalSignature(digitalSignature:string)
  {
     this.digitalSignature = digitalSignature;
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
  setAmount(amount: string){
    this.amount= amount;
  }
  getBalance(): string{
    return this.Balance;
  }
  getTimestamp()
  {
    return this.timestamp ;
  }
  getUserID(): string{
    return this.userId;
  }
  getPassword(): string{
    return this.password;
  }
  getAmount(amount: string){
    return this.amount;
  }
  getTransactionID()
  {
   return this.transactionID ;
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
  getDigitalSignature(digitalSignature:string)
  {
    return this.digitalSignature ;
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
  getAddress()
  {
    return this.address ;
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
