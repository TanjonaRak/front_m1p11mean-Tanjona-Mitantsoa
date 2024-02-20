import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import url from 'src/app/config/config';
import { Customers } from 'src/app/model/modelAll';

@Injectable({
  providedIn: 'root'
})
export class CustomersApiService {

  url_base = "/customer";
  constructor(private httpClient:HttpClient) { }

  SaveCustomer (cust :  Customers){
    try {
      let res = this.httpClient.post(url+this.url_base,JSON.parse(JSON.stringify(cust)));
      return res;
  } catch (error) {
    throw error;
  }
  }
}
