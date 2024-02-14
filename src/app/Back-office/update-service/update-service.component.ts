import { Component,Input,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from 'src/app/model/modelAll';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent {

  service_to_update  !: Service;

  
  OpenSnackBar (message:string,action:string){
    this.snak_Bar.open(message,action,{
      duration:2000,
      panelClass:['toast-success'],
      verticalPosition:'top'
    });
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private snak_Bar : MatSnackBar,private apiService :ServiceApiService){
    // console.log(data)
    this.service_to_update = data;
    // console.log(this.service_to_update)
  }



  UpdateService(form:NgForm){
    this.apiService.UpdateService(this.service_to_update).subscribe((res:any)=>{
      console.log(res)
      if(res.status === 200){
        this.OpenSnackBar("Update Service with success","Successfull")
      }
    })
    
  }

}
