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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyModalComponent } from './my-modal/my-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderMenuComponent } from './Component/header-menu/header-menu.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ServicesListComponent } from './Front-Office/services-list/services-list.component';
import { ServiceComponent } from './Front-Office/service/service.component';
import { LoginClientComponent } from './Front-Office/login-client/login-client.component';
import { LoginBackOfficeComponent } from './Component/login-back-office/login-back-office.component';
import { HeaderManagerComponent } from './Component/header-manager/header-manager.component';
import { HomeManagerComponent } from './Back-office/home-manager/home-manager.component';
import { TableComponent } from './Component/table/table.component';
import { CreateEmployeeComponent } from './Component/create-employee/create-employee.component';
import { ComponentBaseComponent } from './Component/component-base/component-base.component';
import { AllUserComponent } from './Back-office/all-user/all-user.component';
import { ComponentBaseEmployeeComponent } from './Component/component-base-employee/component-base-employee.component';
import { HomeEmployeeComponent } from './Employee/home-employee/home-employee.component';
import { ComponentListUserComponent } from './Back-office/component-list-user/component-list-user.component';
import { NewEmployeeComponent } from './Back-office/new-employee/new-employee.component';
import { AddNewServiceComponent } from './Back-office/add-new-service/add-new-service.component';
import { AddNewServicePageComponent } from './Back-office/add-new-service-page/add-new-service-page.component'
// import { TieredMenuModule } from 'primeng/tieredmenu';



@NgModule({
  declarations: [
    AppComponent,
    PersonnePageComponent,
    AjoutPersonneComponent,
    ListAppointmentComponent,
    HomeComponent,
    AddEmployeeComponent,
    // HomeComponent
    MyModalComponent,
    HeaderMenuComponent,
    FooterComponent,
    ServicesListComponent,
    ServiceComponent,
    LoginClientComponent,
    LoginBackOfficeComponent,
    HeaderManagerComponent,
    HomeManagerComponent,
    TableComponent,
    CreateEmployeeComponent,
    ComponentBaseComponent,
    AllUserComponent,
    ComponentBaseEmployeeComponent,
    HomeEmployeeComponent,
    ComponentListUserComponent,
    NewEmployeeComponent,
    AddNewServiceComponent,
    AddNewServicePageComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    // TieredMenuModule,
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
          path:'',
          component:HomeComponent
        },{
          path : 'employee/create',
          component : AddEmployeeComponent
        },
        {
          path : 'service',
          component : ServiceComponent
        }, {
          path:'home',
          component:HomeComponent
        },
        {
          path:'login',
          component:LoginClientComponent
        },{
          path:'login-admin',
          component:LoginBackOfficeComponent
        },
        {
          path:'home-manager',
          component:HomeManagerComponent
        },{
          path:'all-user',
          component : AllUserComponent
        },{
          path:'home-employee',
          component:HomeEmployeeComponent
        },{
          path:'new-employee',
          component:NewEmployeeComponent
        },{
          path :"new-service",
          component:AddNewServicePageComponent
        }
    ]),
    BrowserAnimationsModule
  ],
  providers: [PersonneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
