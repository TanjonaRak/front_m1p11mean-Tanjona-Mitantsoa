import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customers } from 'src/app/model/modelAll';
import { CustomersApiService } from 'src/app/service/Customers/customers-api.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {
  constructor (private customer_api:CustomersApiService){}
    newCustomer  = {
      name: "",
      first_name: "",
      password: "",
      email: "",
      photo: ""
    } as Customers

    customerRegister (form :NgForm){
      try {
        this.newCustomer.name = form.value.name;
      this.newCustomer.first_name = form.value.first_name;
      this.newCustomer.password = form.value.password;
      this.newCustomer.email = form.value.email;
      this.newCustomer.photo = form.value.phone;
      this.customer_api.SaveCustomer(this.newCustomer).subscribe((res:any)=>{
        console.log(JSON.stringify(res))  
      });
      }  catch (error) {
        console.log(error)  
      }
      
    }

}
