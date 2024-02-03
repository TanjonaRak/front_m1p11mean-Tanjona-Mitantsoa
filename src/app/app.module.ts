import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnePageComponent } from './Component/personne-page/personne-page.component';
import { RouterModule } from '@angular/router';
import { AjoutPersonneComponent } from './Component/ajout-personne/ajout-personne.component';
import {  HttpClientModule } from '@angular/common/http';
import { PersonneServiceService } from './service/personne-service.service';
import { ListAppointmentComponent } from './Employe/list-appointment/list-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonnePageComponent,
    AjoutPersonneComponent,
    ListAppointmentComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
          path:'personne',
          component:PersonnePageComponent
        },
        {
          path:'ajout-personne',
          component:AjoutPersonneComponent
        }
    ])
  ],
  providers: [PersonneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
