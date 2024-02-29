import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { manager } from 'src/app/model/modelAll';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';

@Component({
  selector: 'app-login-back-office',
  templateUrl: './login-back-office.component.html',
  styleUrls: ['./login-back-office.component.css']
})
export class LoginBackOfficeComponent {



  manager = {
    login : "Admin",
    password :"admin"
  } as manager


  constructor(private router:Router,private api :  ServiceApiService,private snak_Bar : MatSnackBar){

  }

  Connect(form:NgForm){
      if(form.valid){
        console.log(form.value.login)
        this.manager.login = form.value.login;
        this.manager.password = form.value.password;
        this.api.Login(this.manager).subscribe((res:any)=>{
          if(res.status===200){
            console.log(res)
            this.OpenSnackBar("Login with success","Success");
            localStorage.setItem('manager',JSON.stringify(res.token));
            window.location.href = "/manager/home-manager"
          }else{
            this.OpenSnackBar(res.message,"Error");
          }
        });
      }
  }

  OpenSnackBar (message:string,action:string){
    this.snak_Bar.open(message,action,{
      duration:2000,
      panelClass:['toast-success'],
      verticalPosition:'top'
    });
  }
}
