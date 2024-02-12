import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { TableComponent } from 'src/app/Component/table/table.component';
@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css']
})
export class HomeEmployeeComponent {


  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  componentArgument : any = TableComponent

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const factory = this.resolver.resolveComponentFactory(TableComponent); // Remplacez AppTableComponent par votre composant
    this.container.createComponent(factory);
  }
}
