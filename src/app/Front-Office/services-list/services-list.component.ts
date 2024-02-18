import { Component } from '@angular/core';
import { Service } from 'src/app/model/modelAll';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {


  constructor(private apiService:ServiceApiService){

  }

  services = [
    {_id:"1",description:"A small river named Duden flows by their place and supplies.",name:"Haircut",delay:"30 min",price:20000,commission:0.2,photo:"flaticon-male-hair-of-head-and-face-shapes"},
    {_id:"2",description:"A small river named Duden flows by their place and supplies.",name:"Beard",delay:"45 min",price:25000,commission:0.2,photo:"flaticon-beard"},
    {_id:"2",description:"A small river named Duden flows by their place and supplies.",name:"Makeup",delay:"45 min",price:25000,commission:0.2,photo:"flaticon-beard"},
    {_id:"2",description:"A small river named Duden flows by their place and supplies.",name:"Body Treatment",delay:"45 min",price:25000,commission:0.2,photo:"flaticon-healthy-lifestyle-logo"}
  ] as Service[];

  offset = 8;
  limit = 4;

  ngOnInit(){
    this.getService();
  }
  

  getService(){
    this.apiService.getServices(this.offset,this.limit).subscribe((res:any)=>{
      if(res.status === 200){
        this.services = res.data
      }
    })
  }




}
