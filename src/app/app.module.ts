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
import { HomeComponent } from './Component/home/home.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonnePageComponent,
    AjoutPersonneComponent,
    ListAppointmentComponent,
    HomeComponent,
    AddEmployeeComponent
    // HomeComponent
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
        },
        {
          path:'home',
          component:HomeComponent
        },{
          path : 'employee/create',
          component : AddEmployeeComponent
        }
    ])
  ],
  providers: [PersonneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
