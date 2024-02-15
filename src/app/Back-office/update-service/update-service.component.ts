import { Component,Input,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from 'src/app/model/modelAll';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceModalService } from 'src/app/service/ServiceModal/service-modal.service';
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

  modal_event :boolean = false


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private snak_Bar : MatSnackBar,private apiService :ServiceApiService,private closeModal:ServiceModalService){
    // console.log(data)
    this.service_to_update = data.service;
    this.modal_event = data.modal_event;
    // console.log(this.service_to_update)
  }



  UpdateService():void{
    this.apiService.UpdateService(this.service_to_update).subscribe((res:any)=>{
      console.log(res)
      if(res.status === 200){
        // this.modal_event = false
        this.closeModal.closeModalFonction();
        this.OpenSnackBar("Update Service with success","Successfull")
      }else{
        this.OpenSnackBar(res.message,"Error")
      }
    })
    
  }

}
