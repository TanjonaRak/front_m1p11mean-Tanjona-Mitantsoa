import { Component, ElementRef, ViewChild } from '@angular/core';
import { Customers, Employee, Service, preferenceEmployee } from 'src/app/model/modelAll';
import { PreferenceApiService } from 'src/app/service/Preference/preference-api.service';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import Swiper from 'swiper';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngAfterViewInit() {
    const swiper = new Swiper(this.swiperContainer.nativeElement, {
      // Configuración de Swiper
    });
  }

  constructor(private apiService:EmployeeServiceService,private apiPreference:PreferenceApiService){

  }

  employees :Employee[] = [];
  userConnect !: Customers;

  ngOnInit():void{
    this.getEmployee();
    
  }

  services = [
    {_id:"1",description:"A small river named Duden flows by their place and supplies.",name:"Haircut",delay:"30 min",price:20000,commission:0.2,photo:"flaticon-male-hair-of-head-and-face-shapes"},
    {_id:"2",description:"A small river named Duden flows by their place and supplies.",name:"Beard",delay:"45 min",price:25000,commission:0.2,photo:"flaticon-beard"},
    {_id:"2",description:"A small river named Duden flows by their place and supplies.",name:"Makeup",delay:"45 min",price:25000,commission:0.2,photo:"flaticon-beard"},
    {_id:"2",description:"A small river named Duden flows by their place and supplies.",name:"Body Treatment",delay:"45 min",price:25000,commission:0.2,photo:"flaticon-healthy-lifestyle-logo"}
  ] as Service[];

  getEmployee(){
    let userConnect = this.apiPreference.getCustomerConnect() as Customers;
    this.userConnect = userConnect;
    console.log("TYVHBHJBHHJ")
    this.apiPreference.getEmployeePreference(userConnect).subscribe((res:any)=>{
      console.log(res)
      if(res.status === 200){
        this.employees = res.data;
      }
    })
  }

  CheckPreference(state : number,employee:Employee){
    // alert(state);
    // this.
    console.log(state,employee)
    // this.isChecked = !this.isChecked;
    let preference = {
      _id : employee?._idpreference,
      customer : this.userConnect,
      employee : employee
    } as preferenceEmployee
    this.apiPreference.CheckPreference(preference,state).subscribe((res:any)=>{
      console.log(res)
      if(res.status === 200 ){
        console.log("Okey")
      }else{
        console.log(res)
      }
    });
  }

  // isChecked: boolean = false;


}
