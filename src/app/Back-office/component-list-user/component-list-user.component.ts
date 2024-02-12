import { Component } from '@angular/core';
import { Employee } from 'src/app/model/modelAll';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-component-list-user',
  templateUrl: './component-list-user.component.html',
  styleUrls: ['./component-list-user.component.css']
})
export class ComponentListUserComponent {

  employees = [] as Employee [];

  offset = 0 ;
  limit = 3;

  numberPage = 0;

  constructor (private apiService : EmployeeServiceService){
  }

  getRange(n:number):number[]{
    return Array.from({length:n},(_,i)=>i);
  }


  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee (){
    this.apiService.getEmployee(this.offset,this.limit)?.subscribe((res:any)=>{
        console.log(res)
        if(res.status === 200){
          this.employees = res.data; 
          this.numberPage = res.lineNumber
        }
    })
  }

  paginate(pageNum : number){
    console.log(pageNum)
    this.offset = (pageNum-1)*this.limit;
    this.getEmployee();
  }
}
