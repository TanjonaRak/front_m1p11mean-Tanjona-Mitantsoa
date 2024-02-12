import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AddEmployeeComponent } from 'src/app/Employee/add-employee/add-employee.component';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  componentADD :string ="<app-table></app-table>";
  componentArgument : any = AddEmployeeComponent

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    // const factory = this.resolver.resolveComponentFactory(AddEmployeeComponent); // Remplacez AppTableComponent par votre composant
    // this.container.createComponent(factory);
  }
}
