import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { AllServiceComponent } from 'src/app/Back-office/AllService/all-service/all-service.component';
import { TableComponent } from '../table/table.component';
import { AddNewServiceComponent } from 'src/app/Back-office/add-new-service/add-new-service.component'
import { ActivatedRoute } from '@angular/router';
import { AddEmployeeComponent } from 'src/app/Employee/add-employee/add-employee.component';
import { ComponentListUserComponent } from 'src/app/Back-office/component-list-user/component-list-user.component';
import { LeaveEmployeeComponent } from 'src/app/Back-office/leave-employee/task-employee.component';

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
        this.createDynamicComponent(AddEmployeeComponent);
      }
      if(this.showComponent ==="Leave"){
        this.createDynamicComponent(LeaveEmployeeComponent);
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
