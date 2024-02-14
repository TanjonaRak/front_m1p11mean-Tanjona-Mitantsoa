import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Service } from 'src/app/model/modelAll';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';

@Component({
  selector: 'app-add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrls: ['./add-new-service.component.css']
})
export class AddNewServiceComponent {

  constructor(private serivice_api:ServiceApiService,private snak_Bar : MatSnackBar,private router:Router){}


  newService = {
    name : "",
    price : 0,
    delay : "",
    commission : 0.0
  } as Service;

 

  OpenSnackBar (message:string,action:string){
    this.snak_Bar.open(message,action,{
      duration:2000,
      panelClass:['toast-success'],
      verticalPosition:'top'
    });
  }

  createService(form :NgForm){
      this.newService.name = form.value.name;
      this.newService.price = form.value.price;
      this.newService.delay = form.value.delay;
      this.newService.commission = form.value.commission;
      this.newService.description = form.value.description;
      if(!form.valid){
        console.log("Errueur")
      }else{
        this.serivice_api.CreateService(this.newService).subscribe((res:any)=>{
          if(res.status === 200){
            console.log(JSON.stringify(res))  
            this.OpenSnackBar("Create Service with success","Successfull")
            this.router.navigate(["/manager/all-service"]) ;   
          }else{

          }
        });
        // console.log(JSON.stringify(this.newService))
      }
  }
}
