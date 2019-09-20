import { SharedService } from '../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent implements OnInit{

  customers$: any;
  searchText: any;
  counter:any;

  page = 1;
  pageSize = 6;
  collectionSize: number;

  constructor(private customerService: CustomerService, 
    private shared: SharedService, private router: Router) { }

  ngOnInit() {
    this.getCustomersList();
  }

  clear() {
    this.searchText = '';
  }

  editCustomer(phone, name, key) {
    console.log(phone);
    this.shared.setcustomerPhone(phone);
    this.shared.setcustomerName(name);
    this.shared.setcustomerKey(key);
    this.router.navigateByUrl("edit");
  }

  onChanged() {
    this.page = 1;
  }

  save(val) {
    this.shared.setsearchText(val);
    this.router.navigateByUrl("add");
  }

  getCustomersList() {
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(customers => {
      this.customers$ = customers;
      this.collectionSize = this.customers$.length;
    });
  }

  // deleteCustomers() {
  //   this.customerService.deleteAll();
  // }

}
