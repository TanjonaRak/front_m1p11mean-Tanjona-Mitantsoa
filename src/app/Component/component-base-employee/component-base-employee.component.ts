import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';


@Component({
  selector: 'app-component-base-employee',
  templateUrl: './component-base-employee.component.html',
  styleUrls: ['./component-base-employee.component.css']
})
export class ComponentBaseEmployeeComponent {
  @Input() componentType!: Type<any>; // Propriété d'entrée pour recevoir le type du composant

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    if (this.componentType) {
      this.createDynamicComponent(this.componentType); // Créer le composant dynamiquement
    }
  }

  createDynamicComponent(componentType: Type<any>) {
    const factory = this.resolver.resolveComponentFactory(componentType);
    this.container.createComponent(factory);
  }
}
