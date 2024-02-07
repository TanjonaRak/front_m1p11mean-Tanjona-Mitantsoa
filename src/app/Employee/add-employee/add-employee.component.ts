import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee, Service } from 'src/app/model/modelAll';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor (private apiService : EmployeeServiceService){
  }

//{
//     "name" :"RAKOTO",
//     "first_name" : "ROBERT",
//     "login" : "LOGIN",
//     "email":"tanjona@gmail.com",
//     "password":"12345879655",
//     "service":[{"_id":"qscs584459874cqs","name":"makup"},{"_id":"sdcq5855454zd8","name":"coiffeur"}]
// }

  employee_to_add = {
    name : "",
    first_name : "",
    login : "",
    email :"",
    password : "",
    service : [],
    etat : 10,
    photo : ""
  } as Employee

  offset = 0 ;
  limit = 3;

  paginate = [1,2,3,4,5]

  employees = [] as Employee [];

  service = [
    {_id:"1",name:"Makup",delay:"30 min",price:20000,commission:0.2,photo:""},
    {_id:"2",name:"Ongle",delay:"45 min",price:25000,commission:0.2,photo:""}
  ] as Service[];

  ngOnInit(): void {
    this.getEmployee();
  }


  createEmployee(form:NgForm) {
    // console.log(form.valid)
    this.employee_to_add.name = form.value.name
    this.employee_to_add.first_name = form.value.first_name
    this.employee_to_add.login = form.value.login
    this.employee_to_add.email = form.value.email
    this.employee_to_add.password = form.value.password
    if(form.valid){
      this.apiService.CreateEmployee(this.employee_to_add).subscribe((res:any)=>{
        console.log(res)
      })
    }else{
      
    }
  }

  getEmployee (){
    this.apiService.getEmployee(this.offset,this.limit)?.subscribe((res:any)=>{
        console.log(res)
        if(res.status === 200){
          this.employees = res.data ; 
        }
    })
  }

  Pagination(){
    console.log("Click")  
  }


}
