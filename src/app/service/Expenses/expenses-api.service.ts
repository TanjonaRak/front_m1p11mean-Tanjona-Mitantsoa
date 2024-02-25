import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import url from 'src/app/config/config';
import { Offer, expenses } from 'src/app/model/modelAll';

@Injectable({
  providedIn: 'root'
})
export class ExpensesApiService {

  url_base = "/expenses";
  url_base_offer = "/offer";

  constructor(private httpClient : HttpClient) { }
  

  SaveExpenses(expenses:expenses){
    try {
      return this.httpClient.post(url+this.url_base,expenses);
    } catch (error) {
      throw error;
    }
  }

  SaveOffer(offer:Offer){
    try {
      return this.httpClient.post(url+this.url_base_offer,offer);
    } catch (error) {
      throw error;
    }
  }

  getOffer(offer:Offer,offset:Number,limit:Number){
    try {
        return this.httpClient.post(url+this.url_base_offer+"/"+offset+"/"+limit,offer)
    } catch (error) {
      throw error;
    }
  }

}
