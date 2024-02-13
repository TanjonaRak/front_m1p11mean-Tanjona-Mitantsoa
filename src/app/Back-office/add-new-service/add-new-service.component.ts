import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from 'src/app/model/modelAll';

@Component({
  selector: 'app-add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrls: ['./add-new-service.component.css']
})
export class AddNewServiceComponent {


  newService = {
    name : "",
    price : 0,
    delay : "",
    commission : 0.0
  } as Service

  createService(form :NgForm){
      this.newService.name = form.value.name;
      this.newService.price = form.value.price;
      this.newService.delay = form.value.delay;
      this.newService.commission = form.value.commission;
      this.newService.desc = form.value.description;
      if(!form.valid){
        console.log("Errueur")
      }else{
        console.log(this.newService)
      }
  }
}
