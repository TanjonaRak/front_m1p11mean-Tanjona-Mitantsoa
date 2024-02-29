import { Component } from '@angular/core';


import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Employee, data, task } from 'src/app/model/modelAll';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
@Component({
  selector: 'app-task-employee',
  templateUrl: './task-employee.component.html',
  styleUrls: ['./task-employee.component.css']
})
export class TaskEmployeeComponent {
  todo :any[]=[];
  dataTast = data;
  done :any[]=[];
  commission = 0;
  date = this.employeeApi.getDateFormat(new Date());

  employee_connected  !: Employee

  constructor(private employeeApi :EmployeeServiceService){
    
  }

  ngOnInit(){
    this.employee_connected=this.employeeApi.getEmployeeConnected();
    console.log(this.employee_connected)
    this.getTask();
    // this.getCommission();
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.container.id)
      alert("Vous etes sure cette action")
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(event.previousIndex)
      if(event.container.id==="done"){
        console.log("DONE ",this.done[event.currentIndex]._id)
        this.UpdateTask(this.done[event.currentIndex]._id,20);
      }if(event.container.id ==="todo"){
        console.log("TODO ",this.todo[event.currentIndex]._id)
        this.UpdateTask(this.todo[event.currentIndex]._id,10);
      }
      this.getCommission();
      // let id = event.previousContainer as Number ;
      // console.log(this.done[event.currentIndex]._id)
    }
  }

  getTask(){
    console.log(this.employee_connected)
    // console.log(this.employeeApi.getDateFormat(this.date))
    console.log(this.date.toString())
      this.employeeApi.getTask(this.employee_connected,this.date.toString()).subscribe((res:any)=>{
        if(res.status === 200){
          console.log(res.data)
          this.todo = res.data.task_proccessing;
          this.done = res.data.task_finish;
          this.getCommission();
        }
      });
  }

  getDate(event:Event){
    console.log(this.date)
    this.getTask();
  }

  UpdateTask(_id_task:string,state:Number){
    this.employeeApi.UpdateTask(_id_task,state).subscribe((res:any)=>{
      console.log(res)
        if(res.status===200){
          // alert("Task ")
          console.log("res",res)
        }
    })
  }

  getCommission(){
    let com = 0;
    console.log(this.done.length)
    for(let n= 0;n<this.done.length;n++){
      console.log(this.done[n].service.price,"z",this.done[n].service.commission)
      com+=(this.done[n].service.price - (this.done[n].service.price*this.done[n].service.commission))
    }
    this.commission = com;
  }
}
