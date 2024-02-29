import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, appointment } from '../model/modelAll';
import url from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  url_base = "/employee";
  url_base_appointment = "/appointment";
  constructor(private httpClient:HttpClient) { }

  CreateEmployee(employee_to_create:Employee ):Observable<any>{
    console.log(employee_to_create)
    try {
      let res = this.httpClient.post(url+this.url_base,JSON.parse(JSON.stringify(employee_to_create)));
      return res;
    } catch (error) {
      throw error;
    }
  }

  getEmployeeConnected():Employee{
    try {
      let localEmployee = localStorage.getItem("user");
      console.log(localEmployee)
      let employeeConnected !: Employee;
      if(localEmployee){
        employeeConnected = JSON.parse(localEmployee) as Employee;
        return employeeConnected;
      }
      return  employeeConnected;
    } catch (error) {
      throw error;
    }
  }

  getEmployee(offset ?: number,limit?:number) :Observable<any>{
    try {
      let res = this.httpClient.get<any>(url+this.url_base+"/"+offset+"/"+limit);
      return res;
    } catch (error) {
      throw error;
    }
  }

  UpdateEmployee(employee:Employee):Observable<any>{
    try {
      let res = this.httpClient.put<any>(url+this.url_base,JSON.parse(JSON.stringify(employee)))
      return res;     
    } catch (error) {
      throw error
    }
  }

  getEmployeeById(id?:string){
    try {
      let profilEmployee = this.httpClient.get(url+this.url_base+"/"+id); 
      return profilEmployee;
    } catch (error) {
      throw error;
    }
  }

  getHourAvaalaible (appointment : appointment){
    try {
      console.log("appoointelsvwcx ",appointment);
      let result  = this.httpClient.post(url+this.url_base_appointment+"/getCompareTimeService",appointment);
      return result;

    } catch (error) {
      throw error;
    }
  }

  getEmployeeByAppointment(appointment:appointment){
    try {
      return this.httpClient.post(url+this.url_base_appointment+"/employee-appointment",appointment);
    } catch (error) {
      throw error;
    }
  }

  SaveAppointment(appointment:appointment){
    try {
        return this.httpClient.post(url+this.url_base_appointment,appointment);      
    } catch (error) {
      throw error
    }
  }

  getTask(employee:Employee,dateTask:string){
    try {
      let dataSend = {
        employee:employee,
        dateTask:dateTask
      }
      console.log(JSON.stringify(dataSend))
      return this.httpClient.post(url+this.url_base_appointment+"/employee-task",dataSend);
    } catch (error) {
      throw error;
    }
  }

  UpdateTask(id_task:string,state:Number){
    try {
      return this.httpClient.put(url+this.url_base_appointment+"/employee-task/"+id_task+"/"+state,null);
    } catch (error) {
      throw error;
    }
  }

  getDateFormat(date:Date):string{
    const year = date.getFullYear();
    // JavaScript considère les mois de 0 à 11, donc on ajoute 1 pour obtenir le mois réel
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  LoginEmployee(employee:Employee){
    try {
      return this.httpClient.post(url+this.url_base+"/login-employee",employee);
    } catch (error) {
      throw error;
    }
  }
  getAppointmentPerEmploye (employee:Employee){
    try {
      let res = this.httpClient.post(url+this.url_base+"/AppointmentEmp",JSON.parse(JSON.stringify(employee)));
      return res;
    } catch (error) {
      throw error;
    }
  }
  getNbrAppointmentPerDayPerMonth (year:number,month:number){
    try {
      let log = this.httpClient.get(`${url}${this.url_base}/${"state-app"}/${year}/${month}`);
      return log;
    } catch (error) {
      throw error;
    }
  }
  getTurnover (year:number,month:number){
    try {
      let log = this.httpClient.get(`${url}${this.url_base_appointment}/${year}/${month}`);
      return log;
    } catch (error) {
      throw error;
    }
  }

}
