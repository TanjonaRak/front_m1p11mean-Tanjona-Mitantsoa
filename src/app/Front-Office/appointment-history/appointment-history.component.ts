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
    this.getHistoryApp();
  }

  getHistoryApp (){
    
    let item = localStorage.getItem('customer');
    let monObjetRecupere;
    if (item !== null) {
        monObjetRecupere = JSON.parse(item);
        let id = monObjetRecupere.id;
        console.log(id);
        this.apiService.GetHistoryAppointment(monObjetRecupere).subscribe((res:any)=>{
          if(res.status === 200){
            console.log("res = ",res.data);
            this.appointment = res.data  as appointment[];
            console.log(this.appointment);
          }
        });
    }
  }

   formatDate  (inputDate: Date | string | undefined|any) {
    // console.log(JSON.stringify(inputDate));
    if(!inputDate){
        return '';
    }
    const parsedDate = typeof inputDate === 'string' ? new Date(inputDate.split('T')[0]) : inputDate;
    if (isNaN(parsedDate.getTime())) {
        return ''; // Handle invalid date
    }
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    };
    return new Intl.DateTimeFormat('en-EN', options).format(parsedDate).split('at')[0];
  };

}
