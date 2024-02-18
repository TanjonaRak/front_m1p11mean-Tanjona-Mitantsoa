import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import url from 'src/app/config/config';
import { Customers, preference, preferenceEmployee, preferenceService } from 'src/app/model/modelAll';

@Injectable({
  providedIn: 'root'
})
export class PreferenceApiService {

  url_base = "/preference";
  url_base_employee = "/preference-employee"
  url_base_service = "/preference-service";

  constructor(private httpClient:HttpClient) { }

  getPreference(){

  }


  getCustomerConnect(){
    let localConnect = localStorage.getItem("customer");
    if(localConnect){
      let customer = JSON.parse(localConnect) as Customers;
      return customer;
    }return null;
  }
  CheckPreference(preference:preferenceEmployee,state:number){
    try {
        let result = this.httpClient.post(url+this.url_base_employee+"/"+state,preference);
        return result;
    } catch (error) {
      throw error;
    }
  }

  getEmployeePreference(customer:Customers){
    try {
      // console.log(url+this.url_base_employee+"/employee/Preference")
      // console.log(customer)
      let result = this.httpClient.post(url+this.url_base_employee+"/employee/preference",JSON.parse(JSON.stringify(customer)));
      return result;
    } catch (error) {
      throw error;
    }
  }

  CheckPreferenceService(preference:preferenceService,state:number){
    try {
        let result = this.httpClient.post(url+this.url_base_service+"/"+state,preference);
        return result;
    } catch (error) {
      throw error;
    }
  }

  getServicePreference(customer:Customers){
    try {
      // console.log(url+this.url_base_employee+"/employee/Preference")
      // console.log(customer)
      let result = this.httpClient.post(url+this.url_base_service+"/service/preference",JSON.parse(JSON.stringify(customer)));
      return result;
    } catch (error) {
      throw error;
    }
  }


}
