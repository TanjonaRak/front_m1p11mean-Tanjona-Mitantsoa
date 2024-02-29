import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/model/modelAll';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent {

  constructor(private apiEmployee :EmployeeServiceService,private snak_Bar : MatSnackBar){

  }

  employee={
    login : "",
    password : ""
  } as Employee;

  Connect(form: NgForm){
    console.log("ddffg",form.valid)
      if(form.valid){
          this.employee.password = form.value.password;
          this.employee.login = form.value.login;
          this.Login();
      }else{
        this.OpenSnackBar("Input is obligatoir","Error");
      }
  }

  Login(){
      this.apiEmployee.LoginEmployee(this.employee).subscribe((res:any)=>{
        if(res.status === 200){
          this.OpenSnackBar("Login with success","Success");
          localStorage.setItem("user",JSON.stringify(res.token));
          window.location.href = "/employee/home-employee"
        }if(res.status === 401){
          this.OpenSnackBar(res.message,"Error");
        }
      })
  }

  OpenSnackBar (message:string,action:string){
    this.snak_Bar.open(message,action,{
      duration:2000,
      panelClass:['toast-success'],
      verticalPosition:'top'
    });
  }

}

