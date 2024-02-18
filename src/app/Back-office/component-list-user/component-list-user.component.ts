import { Component } from '@angular/core';
import { Employee } from 'src/app/model/modelAll';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateEmployeeComponent } from 'src/app/Employee/update-employee/update-employee.component';
import { ServiceModalService } from 'src/app/service/ServiceModal/service-modal.service';
function delay(ms:number){
  return new Promise(resolve=>setTimeout(resolve,ms))
}


@Component({
  selector: 'app-component-list-user',
  templateUrl: './component-list-user.component.html',
  styleUrls: ['./component-list-user.component.css']
})
export class ComponentListUserComponent {

  employees = [] as Employee [];

  offset = 0 ;
  limit = 3;

  numberPage = 0;
  loading  = true;

  employee_to_update :Employee = {
    _id:"",
    name:"",
    first_name:"",
    email:"",
    password:"",
    login:""
  }

  constructor (private apiService : EmployeeServiceService,public dialog: MatDialog,private ServiceModal:ServiceModalService){
  }

  getRange(n:number):number[]{
    return Array.from({length:n},(_,i)=>i);
  }


  ngOnInit(): void {
    this.getEmployee();
    this.ServiceModal.closeModal$.subscribe(()=>{
      this.dialog.closeAll();
      this.loading = true;
      this.getEmployee();
      // this.dialog.afterAllClosed();
      this.LoaderStatic();
    })
    this.LoaderStatic();
  }

  getEmployee (){
    this.apiService.getEmployee(this.offset,this.limit)?.subscribe((res:any)=>{
        console.log(res)
        if(res.status === 200){
          this.employees = res.data; 
          this.numberPage = res.lineNumber
        }
    })
  }

  paginate(pageNum : number){
    console.log(pageNum)
    this.offset = (pageNum-1)*this.limit;
    this.getEmployee();
  }

  openDialog(employee:Employee){

  }

  UpdateEmployee(employee:Employee){
    this.employee_to_update._id = employee._id;
    this.employee_to_update.name =employee.name;
    this.employee_to_update.first_name =employee.first_name;
    this.employee_to_update.email = employee.email;
    this.employee_to_update.login =employee.login;
    this.employee_to_update.password = employee.password;
    this.employee_to_update.time_between = employee.time_between;
    this.employee_to_update.end_time = employee.end_time;
    const dialogRef = this.dialog.open(UpdateEmployeeComponent,{
      data : {employee:this.employee_to_update}
    });
    // const dialogRef = this.dialog.open()
  }

  async LoaderStatic (){
    await delay(500);
    this.loading = false
  }

}
