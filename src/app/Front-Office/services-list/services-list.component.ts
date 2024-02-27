import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Customers, Service, preferenceService } from 'src/app/model/modelAll';
import { PreferenceApiService } from 'src/app/service/Preference/preference-api.service';
import { ServiceModalService } from 'src/app/service/ServiceModal/service-modal.service';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';
import { ModalMeetUpComponent } from '../appointment/modal-meet-up/modal-meet-up.component';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {


  constructor(private apiService:ServiceApiService,private apiPreference:PreferenceApiService,public dialog: MatDialog,private ServiceModal:ServiceModalService){

  }

  @Input()isFavoris : boolean = false

  services = [
    {_id:"1",description:"A small river named Duden flows by their place and supplies.",name:"Service Name",delay:"30",price:20000,commission:0.2,photo:"flaticon-male-hair-of-head-and-face-shapes"},
    {_id:"2",description:"A small river named Duden flows by their place and supplies.",name:"Service Name",delay:"45",price:25000,commission:0.2,photo:"flaticon-beard"},
    {_id:"2",description:"A small river named Duden flows by their place and supplies.",name:"Service Name",delay:"45",price:25000,commission:0.2,photo:"flaticon-beard"},
    {_id:"2",description:"A small river named Duden flows by their place and supplies.",name:"Service Name",delay:"45",price:25000,commission:0.2,photo:"flaticon-healthy-lifestyle-logo"}
  ] as Service[];

  offset = 0;
  limit = 8;

  userConnect !: Customers;

  ngOnInit(){
    window.scrollTo(0,0)
    let userConnect = this.apiPreference.getCustomerConnect() as Customers;
    this.userConnect = userConnect;
    this.getServiceWithPreference();
    this.ServiceModal.closeModal$.subscribe(()=>{
      this.dialog.closeAll();
    })
  }

  // customer	{"_id":"65c3d8112f807500c11291b9","name":"Rakoto","first_name":"Jean"}
  

  getService(){
    this.apiService.getServices(this.offset,this.limit).subscribe((res:any)=>{
      if(res.status === 200){
        this.services = res.data
      }
    })
  }

  getServiceWithPreference(){
    this.apiPreference.getServicePreference(this.userConnect).subscribe((res:any)=>{
      if(res.status === 200 ){
        this.services = res.data;
      }
    })
  }

  CheckPreference(state : number,service:Service){
    // alert(state);
    // this.
    console.log(state,service)
    // this.isChecked = !this.isChecked;
    let preference = {
      _id : service?._idpreference,
      customer : this.userConnect,
      service : service
    } as preferenceService
    this.apiPreference.CheckPreferenceService(preference,state).subscribe((res:any)=>{
      console.log(res)
      if(res.status === 200 ){
        console.log("Okey")
        this.getServiceWithPreference();
      }else{
        console.log(res)
      }
    });
  }

  MeetUP(service:Service){
    const dialogRef = this.dialog.open(ModalMeetUpComponent,{
      data : {service:service}
    });
  }


}
