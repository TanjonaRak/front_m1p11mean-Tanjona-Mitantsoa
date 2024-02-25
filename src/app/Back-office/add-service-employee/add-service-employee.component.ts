import { Component ,Inject} from '@angular/core';


import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Employee, Service } from 'src/app/model/modelAll';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceModalService } from 'src/app/service/ServiceModal/service-modal.service';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-service-employee',
  templateUrl: './add-service-employee.component.html',
  styleUrls: ['./add-service-employee.component.css']
})
export class AddServiceEmployeeComponent {


  services :Service[]=[];
  employeeService :Service[] = [];
  employee !:Employee

  constructor(private apiService :ServiceApiService,@Inject(MAT_DIALOG_DATA) public data: any,private closeModal:ServiceModalService,private apiServiceEmployee:EmployeeServiceService,private snak_Bar : MatSnackBar ){
    this.employee = data.employee;
    // console.log(data.employee.service)
    this.employeeService = data.employee.service
    // console.log("sfsdf")
  }

  ngOnInit(){
      this.getService();
  } 

  OpenSnackBar (message:string,action:string){
    this.snak_Bar.open(message,action,{
      duration:2000,
      panelClass:['toast-success'],
      verticalPosition:'top'
    });
  }



  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.container.id)
      // alert("Vous etes sure cette action")
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  getServiceIsNot(services:Service[],servicesUser:Service[]){
    let serviceResult = [] as Service[];
    
      for(let i = 0;i<services.length;i++){
        let test = false;
        for(let n=0;n<servicesUser.length;n++){
            if(services[i]._id === servicesUser[n]._id){
                // serviceResult.push(services[i]);
                test = true;
                // continue ;
            }
        }
        if(test === false){
          serviceResult.push(services[i]);
        }
      }
      this.services = serviceResult;
  }

  getService(){
    this.apiService.getServices(0,100).subscribe((res:any)=>{
      if(res.status === 200){
        this.employeeService = this.employee.service as Service[];
        // this.services = res.data;
        this.getServiceIsNot(res.data,this.employeeService);
      }else{
        console.log("error ")
      }
    })
  }

  confirmUpdate(){
    console.log(this.employee)
      this.apiServiceEmployee.UpdateEmployee(this.employee).subscribe((res:any)=>{
        if(res.status === 200){
          this.closeModal.closeModalFonction();
          this.OpenSnackBar("Update Service with success","Successfull")
        }else{
          this.OpenSnackBar(res.message,"Error")
        }
      })
  }



}
