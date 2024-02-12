import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee, Service } from 'src/app/model/modelAll';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { MyModalComponent } from 'src/app/my-modal/my-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  modalTitle = 'My Modal';
  modalContent = '<p>This is the <strong>content</strong> of my modal.</p>';

  constructor (private apiService : EmployeeServiceService,public modal : MatDialog,private router:Router ){
  }

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


  employees = [] as Employee [];

  service = [
    {_id:"1",name:"Makup",delay:"30 min",price:20000,commission:0.2,photo:""},
    {_id:"2",name:"Ongle",delay:"45 min",price:25000,commission:0.2,photo:""}
  ] as Service[];

  ngOnInit(): void {
    // this.getEmployee();
  }


  createEmployee(form:NgForm) {
    console.log("vdfvfgeg")
    this.employee_to_add.name = form.value.name
    this.employee_to_add.first_name = form.value.first_name
    this.employee_to_add.login = form.value.login
    this.employee_to_add.email = form.value.email
    this.employee_to_add.password = form.value.password
    if(form.valid){
      this.apiService.CreateEmployee(this.employee_to_add).subscribe((res:any)=>{
        console.log(res)
        if(res.status == 200){
          this.router.navigate(["/all-user"])
        }
      })
    }else{
      
    }
  }


  openDialog(employee:Employee): void {
    const dialogRef = this.modal.open(MyModalComponent,{
      data:{
        title:"Update People",
        content : "<button mat-button (click)='get()'>GET</button>",
        employee :employee
      }
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
    });
  }

  get(){
    console.log("GVUBKhkb")
  }


}
