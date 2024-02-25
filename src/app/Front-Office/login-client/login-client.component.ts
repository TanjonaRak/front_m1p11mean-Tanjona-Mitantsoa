import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomersApiService } from 'src/app/service/Customers/customers-api.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent {
  constructor (private customer_api:CustomersApiService){}
  

  Connect(form:NgForm){
    try {
      this.customer_api.LogingProcessing(form.value.email,form.value.pass).subscribe((res:any)=>{
        console.log(JSON.stringify(res))  
      });
    } catch (error) {
      console.log(error);
    }
      
  }

}
