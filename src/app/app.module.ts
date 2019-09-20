import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
 
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerFilterPipe } from './customer-filter.pipe';
import { EditComponent } from "./customers/edit-customer/editComponent";


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    CreateCustomerComponent,
    CustomersListComponent,
    CustomerFilterPipe,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} },CustomerFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
