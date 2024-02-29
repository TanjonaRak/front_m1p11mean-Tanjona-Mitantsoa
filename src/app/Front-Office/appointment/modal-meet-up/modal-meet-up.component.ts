import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee, Service, appointment } from 'src/app/model/modelAll';
import { ServiceModalService } from 'src/app/service/ServiceModal/service-modal.service';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';


@Component({
  selector: 'app-modal-meet-up',
  templateUrl: './modal-meet-up.component.html',
  styleUrls: ['./modal-meet-up.component.css']
})
export class ModalMeetUpComponent {
  hoursChoice = [] as any[];

  date !: Date;
  service !: Service; 
  hoursAvalaible = [] as any[];

  employeeAvalaible = [] as Employee[]
  customer : any;

  appointment ={
    dateAppointment : this.date,
    service : this.service
  } as appointment;

  hours = "00:00";
   


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private snak_Bar : MatSnackBar,private apiService :EmployeeServiceService,private closeModal:ServiceModalService){
      this.service = data.service;

  } 
 getDate (event:Event){
      // let dt = new Date(this.date);
      this.appointment.dateAppointment = this.date;
      this.appointment.service = this.service;
      this.getAvalaibleHour();

 }

  ngOnInit(){
    let localCustomer = localStorage.getItem("customer");
    if(localCustomer){
      this.customer = JSON.parse(localCustomer)
      this.appointment.customer = this.customer;
    }
    
  }

  getAvalaibleHour (){
     this.apiService.getHourAvaalaible(this.appointment).subscribe((res:any)=>{
      console.log(JSON.stringify(res))  
      if(res.status){
        this.hoursAvalaible = res.message;
      }
    });
  }

 drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.container.id)
      // alert("Vous etes sure cette action")
      // if(this.hoursChoice.length===0){
       
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        if(this.hoursChoice.length>0){
          this.appointment.hours = this.hoursChoice[0].hourAppointment;
          this.getEmployeeByAppoitmment();
        }else{
          this.employeeAvalaible = [];
        }
        
       
      // }
      
    }
  }
  getEmployeeByAppoitmment(){
    this.apiService.getEmployeeByAppointment(this.appointment).subscribe((res:any)=>{
      console.log(res)
      if(res.status ===200 ){
        console.log(res.data)
        this.employeeAvalaible = res.data;
      }
    })
  }

  newAppointment(form:NgForm){
    // if(this.hoursChoice.length!==0){
      this.appointment.employee = form.value.employee
      console.log(this.appointment)
      this.apiService.SaveAppointment(this.appointment).subscribe((res:any)=>{
        if(res.status){
          this.OpenSnackBar("Create offer is successfull","success")
          this.closeModal.closeModalFonction();
        }
      })
    // }else{
    //   this.OpenSnackBar("Hours obligation","Error")
    // }
      
  }

  OpenSnackBar (message:string,action:string){
    this.snak_Bar.open(message,action,{
      duration:2000,
      panelClass:['toast-success'],
      verticalPosition:'top'
    });
  }

  getHours(event:Event){
    console.log(this.hours);
    this.appointment.hours = this.hours;
    this.getEmployeeByAppoitmment();
  }
}
