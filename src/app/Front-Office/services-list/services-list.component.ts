import { Component } from '@angular/core';
import { Service } from 'src/app/model/modelAll';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {


  services = [
    {_id:"1",desc:"A small river named Duden flows by their place and supplies.",name:"Haircut",delay:"30 min",price:20000,commission:0.2,photo:"flaticon-male-hair-of-head-and-face-shapes"},
    {_id:"2",desc:"A small river named Duden flows by their place and supplies.",name:"Beard",delay:"45 min",price:25000,commission:0.2,photo:"flaticon-beard"},
    {_id:"2",desc:"A small river named Duden flows by their place and supplies.",name:"Makeup",delay:"45 min",price:25000,commission:0.2,photo:"flaticon-beard"},
    {_id:"2",desc:"A small river named Duden flows by their place and supplies.",name:"Body Treatment",delay:"45 min",price:25000,commission:0.2,photo:"flaticon-healthy-lifestyle-logo"}
  ] as Service[];


}
