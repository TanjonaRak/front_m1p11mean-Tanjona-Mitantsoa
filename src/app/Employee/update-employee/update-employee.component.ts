import { Component,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/model/modelAll';
import { ServiceModalService } from 'src/app/service/ServiceModal/service-modal.service';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  employee_to_update  !: Employee;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private snak_Bar : MatSnackBar,private apiService :EmployeeServiceService,private closeModal:ServiceModalService){
    // console.log(data)
    this.employee_to_update = data.employee ;
    
    // console.log(this.service_to_update)
  }

  OpenSnackBar (message:string,action:string){
    this.snak_Bar.open(message,action,{
      duration:2000,
      panelClass:['toast-success'],
      verticalPosition:'top'
    });
  }


  UpdateEmployee(form:NgForm){
    console.log(this.employee_to_update)
    this.apiService.UpdateEmployee(this.employee_to_update).subscribe((res:any)=>{
      if(res.status === 200){
        this.closeModal.closeModalFonction();
        this.OpenSnackBar("Update Service with success","Successfull")
      }else{
        this.OpenSnackBar(res.message,"Error")
      }
    })
  } 
}
