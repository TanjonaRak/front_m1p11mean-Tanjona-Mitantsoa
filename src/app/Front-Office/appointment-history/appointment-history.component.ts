import { Component } from '@angular/core';
import { Customers, appointment } from 'src/app/model/modelAll';
import { CustomersApiService } from 'src/app/service/Customers/customers-api.service';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent {

  cust ={
    name : "John Doe"
 } as Customers;

  appointment : appointment[]=[];
  constructor(public apiService:CustomersApiService){}

  ngOnInit():void{ 


    this.apiService.GetHistoryAppointment(this.cust).subscribe((res:any)=>{
      if(res.status === 200){
        this.appointment = res  as appointment[];
        console.log(this.appointment);
      }
    });
  }

  getHistoryApp (){
    this.apiService.GetHistoryAppointment(this.cust).subscribe((res:any)=>{
      if(res.status === 200){
        console.log("res = ",res.data);
        this.appointment = res  as appointment[];
        console.log(this.appointment);
      }
    });
    
  }

}
