import { CustomerService } from '../../services/customer.service';
import { SharedService } from '../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customer: Customer = new Customer();
  submitted = false;

  constructor(private ss: SharedService, private router: Router, private cs: CustomerService) {
  }
  ngOnInit() {
    this.customer.phone = this.ss.getcustomerPhone();
    this.customer.name = this.ss.getcustomerName();
    this.customer.key = this.ss.getcustomerKey();

  }
  backToCustomerList() {
    this.router.navigateByUrl("customers");
  }

  update() {
    this.cs.updateCustomer(this.customer.key,this.customer);
    this.submitted = true;

  }
}
