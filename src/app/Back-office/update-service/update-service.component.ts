import { Component,Input,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from 'src/app/model/modelAll';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';
@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent {

  service_to_update  !: Service;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private apiService :ServiceApiService){
    console.log(data)
    this.service_to_update = data;
    console.log(this.service_to_update)
  }



  UpdateService(form:NgForm){

  }

}