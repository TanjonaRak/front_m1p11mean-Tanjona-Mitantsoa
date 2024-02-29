import { Component } from '@angular/core';
import { Employee, appointment } from 'src/app/model/modelAll';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-all-appointment',
  templateUrl: './all-appointment.component.html',
  styleUrls: ['./all-appointment.component.css']
})
export class AllAppointmentComponent {
  emp = {
    name : "Jane"
  } as Employee;
  appointment : appointment[]=[];
  constructor(public empService : EmployeeServiceService){}

  ngOnInit(){
    this.getAppointmentPerEmp();
  }
  getAppointmentPerEmp (){
    
    let item = localStorage.getItem('user');
    let monObjetRecupere;
    if (item !== null) {
        monObjetRecupere = JSON.parse(item);
        let id = monObjetRecupere._id;
        console.log(id);
        this.empService.getAppointmentPerEmploye(monObjetRecupere).subscribe((res:any)=>{
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
