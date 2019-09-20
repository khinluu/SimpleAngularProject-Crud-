import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private searchText;
  private customerName;
  private customerPhone;
  private customerKey;
  
  getcustomerKey() {
    return this.customerKey;
 }

 setcustomerKey(value) {
   this.customerKey = value;
 }

  getcustomerName() {
     return this.customerName;
  }

  setcustomerName(value) {
    this.customerName = value;
  }

  getcustomerPhone() {
    return this.customerPhone;
 }

 setcustomerPhone(value) {
   this.customerPhone = value;
 }

  setsearchText(value){
    this.searchText = value;
  }

  getsearchText(){
    return this.searchText;
  }
}
