import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { AllServiceComponent } from 'src/app/Back-office/AllService/all-service/all-service.component';
import { TableComponent } from '../table/table.component';
import { AddNewServiceComponent } from 'src/app/Back-office/add-new-service/add-new-service.component'
import { ActivatedRoute } from '@angular/router';
import { AddEmployeeComponent } from 'src/app/Employee/add-employee/add-employee.component';
import { ComponentListUserComponent } from 'src/app/Back-office/component-list-user/component-list-user.component';
import { LeaveEmployeeComponent } from 'src/app/Back-office/leave-employee/task-employee.component';
import { ExpensesComponent } from 'src/app/Back-office/Expenses/expenses/expenses.component';
import { OfferComponent } from 'src/app/Back-office/Offer/offer/offer.component';
import { OfferListComponent } from 'src/app/Back-office/Offer/offer-list/offer-list.component';
import { StatAppointmentComponent } from 'src/app/Back-Office/Statistiques/stat-appointment/stat-appointment.component';

@Component({
  selector: 'app-component-base',
  templateUrl: './component-base.component.html',
  styleUrls: ['./component-base.component.css']
})
export class ComponentBaseComponent {
  @Input() componentType!: Type<any>; // Propriété d'entrée pour recevoir le type du composant

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver,private route: ActivatedRoute) {}

  showComponent : string|null ="home-manager";

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.showComponent = params.get('url');
      console.log('URL récupérée :', this.showComponent);
      this.ngAfterViewInit();
    });
  }

  ngAfterViewInit() {
    
    // if (this.componentType) {
    //   console.log("MIDITRA")
    //   this.createDynamicComponent(this.componentType); // Créer le composant dynamiquement
    // }else{
      // console.log(this.showComponent)
      if(this.showComponent ==="home-manager"){
        this.createDynamicComponent(TableComponent);
      }if(this.showComponent ==="all-service"){
        this.createDynamicComponent(AllServiceComponent);
      }if(this.showComponent ==="new-service"){
        this.createDynamicComponent(AddNewServiceComponent);
      }if(this.showComponent === "new-employee"){
        this.createDynamicComponent(AddEmployeeComponent);
      }if(this.showComponent === "all-user"){
        this.createDynamicComponent(ComponentListUserComponent);
      }if(this.showComponent ==="expenses"){
        this.createDynamicComponent(ExpensesComponent);
      }
      if(this.showComponent ==="Leave"){
        this.createDynamicComponent(LeaveEmployeeComponent);
      }if(this.showComponent ==="offer"){
        this.createDynamicComponent(OfferComponent)
      }if(this.showComponent ==="offer-list"){
        this.createDynamicComponent(OfferListComponent)
      }
      if(this.showComponent ==="stat-appointment"){
        this.createDynamicComponent(StatAppointmentComponent)
      }

    // }
  }

  // loadComponent() {
  //   let componentType: Type<any>;

  //   switch(this.showComponent) {
  //     case 'home-manager':
  //       componentType = TableComponent;
  //       break;
  //     case 'all-service':
  //       componentType = AllServiceComponent;
  //       break;
  //     default:
  //       throw new Error('Component type not supported');
  //   }

  //   this.createDynamicComponent(componentType);
  // }

  createDynamicComponent(componentType: Type<any>) {
    const factory = this.resolver.resolveComponentFactory(componentType);
    this.container.clear();
    this.container.createComponent(factory);
  }

 
}
