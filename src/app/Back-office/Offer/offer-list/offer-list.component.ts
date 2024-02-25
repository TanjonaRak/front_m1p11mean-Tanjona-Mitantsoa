import { Component } from '@angular/core';
import { Offer, Service } from 'src/app/model/modelAll';
import { ExpensesApiService } from 'src/app/service/Expenses/expenses-api.service';
import { ServiceApiService } from 'src/app/service/service-api/service-api.service';
import { NgForm, FormBuilder, FormGroup, FormControl } from '@angular/forms';

function delay(ms:number){
  return new Promise(resolve=>setTimeout(resolve,ms))
}

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent {

  constructor(private ApiOffer:ExpensesApiService,private serviceApi:ServiceApiService){

  }

  

  offset = 0;
  limit = 4;
  loading = true;
  offers : Offer[] = []
  offer = {} as Offer;
  numberPage = 0;
  services: Service[] = []

  ngOnInit(){
    this.getOffer();
    this.LoaderStatic();
    this.getService()
  }
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getOffer(){
    console.log(this.offer)
    this.ApiOffer.getOffer(this.offer,this.offset,this.limit).subscribe((res:any)=>{
      if(res.status){
        this.offers = res.data;
        this.numberPage = res.lineNumber;
      }
    });
  }

  getService() {
    this.serviceApi.getServices(0, 100).subscribe((res: any) => {
      if (res.status === 200) {
        this.services = res.data;
      }
    })
  }

  getRange(n:number):number[]{
    return Array.from({length:n},(_,i)=>i);
  }

  paginate(pageNum : number){
    console.log(pageNum)
    this.offset = (pageNum-1)*this.limit;
    this.getOffer();
  }

  async LoaderStatic (){
    await delay(500);
    this.loading = false
  }

  Search(form:NgForm){
    // let offer = {
    //   service : form.value.service,
    //   start_date : new Date(this.getDateForm(new Date(this.range.value.start))),

    // }
    
    if(form.value.service){
      this.offer.service = form.value.service
    }if(this.range.value.start && this.range.value.end){
      this.offer.start_date = new Date(this.getDateForm(new Date(this.range.value.start)))
      this.offer.end_date = new Date(this.getDateForm(new Date(this.range.value.end)))
    }
    this.getOffer();
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


}
