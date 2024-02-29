import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersApiService } from 'src/app/service/Customers/customers-api.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent {

  
  constructor (private router: Router,private customer_api:CustomersApiService){}
  

  Connect(form:NgForm){
    try {
      let monObjet = { email: form.value.email};
      localStorage.setItem('ObjectCustomer', JSON.stringify(monObjet));
      //recuperer let monObjetRecupere = JSON.parse(localStorage.getItem('monObjet'));
      this.customer_api.LogingProcessing(form.value.email,form.value.pass).subscribe((res:any)=>{
        console.log(JSON.stringify(res));

        this.router.navigate(['/home']);
      });
    } catch (error) {
      console.log(error);
    }
}

 /* saveInputValue(value : string) {

    this.localStorage.setItem('inputValue').subscribe(() => {
      console.log('Input value stored successfully');
    }, (error) => {
      console.error('Error storing input value: ', error);
    });
  }*/
}
