import { Component } from '@angular/core';
import { Service } from 'src/app/model/modelAll';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddNewServiceComponent } from '../../add-new-service/add-new-service.component';
import { UpdateServiceComponent } from '../../update-service/update-service.component';
import { ServiceModalService } from 'src/app/service/ServiceModal/service-modal.service';


function delay(ms:number){
  return new Promise(resolve=>setTimeout(resolve,ms))
}


@Component({
  selector: 'app-all-service',
  templateUrl: './all-service.component.html',
  styleUrls: ['./all-service.component.css']
})
export class AllServiceComponent {


  offset = 0;
  limit = 3;
  numberPage = 0;
  loading  = true;

  services= [] as Service[];

  constructor(private apiService :ServiceApiService,public dialog: MatDialog,private ServiceModal:ServiceModalService){
  }

  getRange(n:number):number[]{
    return Array.from({length:n},(_,i)=>i);
  }

  ngOnInit():void{ 
      this.getServices();
      this.ServiceModal.closeModal$.subscribe(()=>{
        this.dialog.closeAll();
        this.loading = true
        this.getServices();
        // console.log("Appel 2 ")
        this.LoaderStatic();
      })
      this.LoaderStatic();
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
    // console.log(service)
    this.openDialog(service);
  }

  Service_to_update  : Service = {
    name:"",
    delay:"",
    price:0,
    description:"",
    commission:0
  }

  modal_event :boolean= true;

  openDialog(service:Service) {
    console.log(service)
    this.Service_to_update._id = service._id
    this.Service_to_update.name = service.name;
    this.Service_to_update.delay=service.delay;
    this.Service_to_update.price = service.price;
    this.Service_to_update.description = service.description
    this.Service_to_update.commission =service.commission
    const dialogRef = this.dialog.open(UpdateServiceComponent,{
      data : {service:this.Service_to_update,modal_event : this.modal_event}
    });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

  closeModal():void{
    this.ServiceModal.closeModalFonction();
  }

  async LoaderStatic (){
    await delay(500);
    this.loading = false
  }


}
