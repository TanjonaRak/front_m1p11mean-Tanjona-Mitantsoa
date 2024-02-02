import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { personne } from 'src/app/model/personne';
import { PersonneServiceService } from 'src/app/service/personne-service.service';

@Component({
  selector: 'app-personne-page',
  templateUrl: './personne-page.component.html',
  styleUrls: ['./personne-page.component.css']
})
export class PersonnePageComponent {

  constructor (private personneService : PersonneServiceService){

  }

  personneAdd = {
    nom : "",
    prenom:"",
    // datenaissance : ""
  } as personne;

  ngOnInit(): void {
  }

   PersonneADD(forme:NgForm){
    let test = true;
    if(forme.value.nom!==""){
      this.personneAdd.nom = forme.value.nom
      test = false;
    }if(forme.value.prenom!==""){
      this.personneAdd.prenom = forme.value.prenom
      test = false;
    }
    this.personneService.AjoutPersonne(this.personneAdd).subscribe((res:any)=>{
      console.log(res)
    });
  }

  checkValidity(){

  }
}
