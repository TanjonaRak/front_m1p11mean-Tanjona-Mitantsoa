import { Component } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Offer, Service } from 'src/app/model/modelAll';
import { ExpensesApiService } from 'src/app/service/Expenses/expenses-api.service';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

  // range: FormGroup;

  loading: boolean = true;
  services: Service[] = []
  constructor(private serviceApi: ServiceApiService,private snak_Bar : MatSnackBar,private ApiOffer:ExpensesApiService,private router:Router) {

  }

  Offer : Offer = {
    service : this.services[0],
    reduction : 0,
    description : "",
    end_date : new Date(),
    start_date:new Date()
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  newOffer(form: NgForm) {
    // if(this.range.value.start)
    if (this.range.value.start && this.range.value.end && form.valid){
      this.Offer.start_date = new Date(this.getDateForm(new Date(this.range.value.start)))
      this.Offer.end_date = new Date(this.getDateForm(new Date(this.range.value.end))) 
      this.Offer.service = form.value.service;
      this.Offer.reduction = form.value.reduction;
      this.Offer.description = form.value.description
      console.log(this.Offer)
      this.ApiOffer.SaveOffer(this.Offer).subscribe((res:any)=>{
        if(res.status === 200){
          this.OpenSnackBar("Create offer is successfull","success")
          this.loading = true;
          this.LoaderStatic();
          this.router.navigate(["/manager/offert-list"])
        }else{
          this.OpenSnackBar(res.message,"error")
        }
      });
      
    }else{
      this.OpenSnackBar("Input is all Required","error");
    }
      
      // console.log(form.value)
  }

  ngOnInit(): void {
    // console.log("sdsd")
    this.LoaderStatic();
    this.getService();
    
  }



  async LoaderStatic() {
    await delay(500);
    this.loading = false
  }

  getService() {
    this.serviceApi.getServices(0, 100).subscribe((res: any) => {
      if (res.status === 200) {
        this.services = res.data;
      }
    })
  }

  getDateForm(date:Date) {
    // const date = new Date();

    // Récupérez l'année, le mois et le jour de la date actuelle
    const year = date.getFullYear();
    // Notez que getMonth() renvoie les mois de 0 à 11, donc nous ajoutons 1
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    // Formatez la date au format "yy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;

  }

  OpenSnackBar (message:string,action:string){
    this.snak_Bar.open(message,action,{
      duration:2000,
      panelClass:['toast-success'],
      verticalPosition:'top'
    });
  }






}
