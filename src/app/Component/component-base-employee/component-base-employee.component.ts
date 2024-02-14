import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { AllServiceComponent } from 'src/app/Back-office/AllService/all-service/all-service.component';
import { ActivatedRoute } from '@angular/router';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-component-base-employee',
  templateUrl: './component-base-employee.component.html',
  styleUrls: ['./component-base-employee.component.css']
})
export class ComponentBaseEmployeeComponent {
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
      if(this.showComponent ==="all-service"){
        this.createDynamicComponent(AllServiceComponent);
      }
      if(this.showComponent ==="home-employee" || this.showComponent ==="list-appointment"){
        this.createDynamicComponent(TableComponent);
      }
    // }
  }

  createDynamicComponent(componentType: Type<any>) {
    const factory = this.resolver.resolveComponentFactory(componentType);
    this.container.clear();
    this.container.createComponent(factory);
  }
}
