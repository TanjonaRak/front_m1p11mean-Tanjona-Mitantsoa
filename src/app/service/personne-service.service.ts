import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import url from '../config/config';
import { personne } from '../model/personne';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {

  constructor(private httpClient:HttpClient) { }

  private apiUrl = 'http://localhost:3030';

  AjoutPersonne(pers:personne):Observable<any>{
    try {
      console.log(pers)
      // console.log("jnvjdvlkdflk," + this.apiUrl+"/employe/save"):
      let res = this.httpClient.post(url+"/employe/save",JSON.parse(JSON.stringify(pers)))
      console.log(res)
      return res
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  
}
