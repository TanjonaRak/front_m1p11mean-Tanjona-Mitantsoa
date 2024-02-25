import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee, working_hours } from 'src/app/model/modelAll';
import { ServiceModalService } from 'src/app/service/ServiceModal/service-modal.service';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

function delay(ms:number){
  return new Promise(resolve=>setTimeout(resolve,ms))
}


@Component({
  selector: 'app-profil-employee',
  templateUrl: './profil-employee.component.html',
  styleUrls: ['./profil-employee.component.css']
})
export class ProfilEmployeeComponent {


  constructor(private serviceApi: EmployeeServiceService, private snak_Bar: MatSnackBar,private ServiceModal:ServiceModalService) {

  }

  employee_to_update :Employee = {
    _id:"",
    name:"",
    first_name:"",
    email:"",
    password:"",
    login:"",
    picture:"",
    // working_hours:
  }

  work_hours : working_hours={
    end_time :"",
    time_between :"",
    employee:this.employee_to_update
  };
  imageEmployee !:string|ArrayBuffer|null;
  loading  = true;

  OpenSnackBar(message: string, action: string) {
    this.snak_Bar.open(message, action, {
      duration: 2000,
      panelClass: ['toast-success'],
      verticalPosition: 'top'
    });
  }

  ngOnInit() {
    this.getProfil();
    this.LoaderStatic()
    // console.log(this.employee_to_update)
  }

  async getProfil() {
    // this.your_profil =await getProfilEmployee() as Employee;
    let profil_local = localStorage.getItem("user");
    if (profil_local) {
      let user = JSON.parse(profil_local) as Employee;
      this.serviceApi.getEmployeeById(user._id).subscribe((res: any) => {
        // console.log(res)
        if (res.status === 200) {
          this.employee_to_update = res.profil;
          this.imageEmployee = res.profil.picture
        }
      })
    }
  }

  async UpdateProfil(form: NgForm) {
    // this.work_hours.employee = this.employee_to_update;
   
    
    // this.work_hours.time_between = form.value.time_between
    // this.employee_to_update.working_hours = this.work_hours;
    // console.log(this.employee_to_update)
    if (form.valid) {
      console.log(form.value)
      // console.log(form.value.end_time)
      // this.work_hours.time_between =form.value.time_between;
      // this.work_hours.end_time = form.value.end_time;
      // this.employee_to_update.working_hours=this.work_hours
      // this.employee_to_update.picture = this.imageEmployee ;
      // this.employee_to_update.
      this.loading = true;
      this.LoaderStatic();
      this.employee_to_update.name = form.value.name;
      this.employee_to_update.first_name = form.value.first_name;
      this.employee_to_update.login = form.value.login;
      this.employee_to_update.email = form.value.email; 
      this.employee_to_update.time_between = form.value.time_between
      this.employee_to_update.end_time = form.value.end_time

      console.log(this.employee_to_update)
      this.serviceApi.UpdateEmployee(this.employee_to_update).subscribe((res: any) => {
        console.log(res)
        if (res.status === 200) {
          console.log(res.emp_update)
          this.employee_to_update=res.emp_update
          localStorage.setItem("user",JSON.stringify(this.employee_to_update));
          this.ServiceModal.changeUserFonction()
          this.OpenSnackBar("Profil update ", "successfull");
          this.employee_to_update = res.data_update
          this.ngOnInit();
        } else {
          this.OpenSnackBar(res.message, "error");
        }
      })
    } else {
      this.OpenSnackBar("input obligation", "error");
    }
    this.LoaderStatic();
  }



  changeImage(event:any){
    // console.log(event.target.files)
    let file : File=event.target.files[0]
    let reader = new FileReader();
    reader.onload=()=>{
      this.imageEmployee= reader.result
      this.employee_to_update.picture = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  async LoaderStatic (){
    await delay(500);
    this.loading = false
  }


}
