import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service, manager } from 'src/app/model/modelAll';
import url from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  url_base = "/service";
  url_base_manager = "/manager";


  constructor(private httpClient:HttpClient) { }

  CreateService(service_to_add : Service){
    try {
      let res = this.httpClient.post(url+this.url_base,JSON.parse(JSON.stringify(service_to_add)));
      // res.subscribe();
      // res.pipe();
      return res;
    } catch (error) {
      throw error;
    }
  }

  getServices(offset?:number,limit?:number){
    try {
        let res = this.httpClient.get(url+this.url_base+"/"+offset+"/"+limit);
        return res;
    } catch (error) {
      throw error;      
    }
  }

  UpdateService(service:Service){
    try {
      let res = this.httpClient.put(url+this.url_base,service);
      return res;
    } catch (error) {
        throw error;
    }
  }

  Login(manager:manager){
    try {
        return this.httpClient.post(url+this.url_base_manager+"/login",manager);
    } catch (error) {
       throw error;
    }
  }
}
