import { Component } from '@angular/core';
import { Service } from 'src/app/model/modelAll';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddNewServiceComponent } from '../../add-new-service/add-new-service.component';
import { UpdateServiceComponent } from '../../update-service/update-service.component';
@Component({
  selector: 'app-all-service',
  templateUrl: './all-service.component.html',
  styleUrls: ['./all-service.component.css']
})
export class AllServiceComponent {


  offset = 0;
  limit = 3;
  numberPage = 0;

  services= [] as Service[];

  constructor(private apiService :ServiceApiService,public dialog: MatDialog){
  }

  getRange(n:number):number[]{
    return Array.from({length:n},(_,i)=>i);
  }

  ngOnInit():void{
      this.getServices();
  }

  getServices(){
    this.apiService.getServices(this.offset,this.limit).subscribe((res:any)=>{
      if(res.status === 200){
        this.services = res.data;
        this.numberPage = res.lineNumber;
      }
    })
  }

  paginate(pageNum : number){
    console.log(pageNum)
    this.offset = (pageNum-1)*this.limit;
    this.getServices();
  }

  UpdateService(service:Service){
    console.log(service)
  }

  Service_to_update  : Service = {
    name:"",
    delay:"",
    price:0,
    description:"",
    commission:0
  }

  openDialog(service:Service) {
    console.log(service)
    this.Service_to_update.name = service.name;
    this.Service_to_update.delay=service.delay;
    this.Service_to_update.price = service.price;
    this.Service_to_update.description = service.description
    this.Service_to_update.commission =service.commission
    const dialogRef = this.dialog.open(UpdateServiceComponent,{
      data : this.Service_to_update
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
