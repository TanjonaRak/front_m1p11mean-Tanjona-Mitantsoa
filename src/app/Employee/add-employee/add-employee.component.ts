import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee, Service } from 'src/app/model/modelAll';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { MyModalComponent } from 'src/app/my-modal/my-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';


function delay(ms:number){
  return new Promise(resolve=>setTimeout(resolve,ms))
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  modalTitle = 'My Modal';
  modalContent = '<p>This is the <strong>content</strong> of my modal.</p>';

  constructor (private apiService : EmployeeServiceService,public modal : MatDialog,private router:Router,private snak_Bar : MatSnackBar,private apiService_service:ServiceApiService ){
  }

  employee_to_add = {
    name : "",
    first_name : "",
    login : "",
    email :"",
    password : "",
    service : [],
    etat : 10,
    photo : "",
    time_between:"",
    end_time:"",
    salary:0
  } as Employee

  confirm_password = "";

  loading  = true;
  imageEmployee !:string|ArrayBuffer|null;


  employees = [] as Employee [];
  services = [] as Service[];

  service = [
    {_id:"1",name:"Makup",delay:"30 min",price:20000,commission:0.2,photo:""},
    {_id:"2",name:"Ongle",delay:"45 min",price:25000,commission:0.2,photo:""}
  ] as Service[];

  ngOnInit(): void {
    // this.getEmployee();
    this.LoaderStatic();
    this.getServiceWithEmployee();
  }

  getServiceWithEmployee(){
    this.apiService_service.getServices(0,100).subscribe((res:any)=>{
      if(res.status === 200){
        this.services = res.data;
      }else{
        console.log("Error");
      }
    });
  }

  OpenSnackBar (message:string,action:string){
    this.snak_Bar.open(message,action,{
      duration:2000,
      panelClass:['toast-success'],
      verticalPosition:'top'
    });
  }


  createEmployee(form:NgForm) {
    // console.log("vdfvfgeg")
    console.log(form.value.service)
    let dataService = [] as Service[]
    // dataService.push(JSON.parse("\""+form.value.service+"\""));
    this.employee_to_add.name = form.value.name
    this.employee_to_add.first_name = form.value.first_name
    this.employee_to_add.login = form.value.login
    this.employee_to_add.email = form.value.email
    this.employee_to_add.password = form.value.password
    this.confirm_password = form.value.confirm_password;
    this.employee_to_add.time_between = form.value.time_between;
    this.employee_to_add.end_time = form.value.end_time;
    this.employee_to_add.service =[form.value.service];
    this.employee_to_add.salary = form.value.salary;
    // console.log(this.employee_to_add)
    // console.log(this.employee_to_add.password !==this.confirm_password)
    // if(this.employee_to_add.password !==this.confirm_password){
    //   this.OpenSnackBar("Password different in the confirm password","Successfull")
    //   return ;
    // }
    if(form.valid){
      if(this.employee_to_add.password ===this.confirm_password){
        this.apiService.CreateEmployee(this.employee_to_add).subscribe((res:any)=>{
          // console.log(res)
          if(res.status == 200){
            this.OpenSnackBar("Create Employee successfull","Successfull")
            this.router.navigate(["/manager/all-user"])
          }else{
            this.OpenSnackBar(res.message,"Error")
          }
        })
      }else{
        this.OpenSnackBar("Password different in the confirm password","Error")
      }
      
    }else{
      this.OpenSnackBar("Input is obligation","Warning")
    }
  }


  openDialog(employee:Employee): void {
    const dialogRef = this.modal.open(MyModalComponent,{
      data:{
        title:"Update People",
        content : "<button mat-button (click)='get()'>GET</button>",
        employee :employee
      }
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
    });
  }

  get(){
    console.log("GVUBKhkb")
  }

  async LoaderStatic (){
    await delay(200);
    this.loading = false
  }

  

  changeImage(event:any){
    // console.log(event.target.files)
    let file : File=event.target.files[0]
    let reader = new FileReader();
    reader.onload=()=>{
      this.imageEmployee= reader.result
      this.employee_to_add.picture = reader.result as string
    }
    reader.readAsDataURL(file);
  }


}
