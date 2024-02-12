import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TableComponent } from 'src/app/Component/table/table.component';
import { AddEmployeeComponent } from 'src/app/Employee/add-employee/add-employee.component';
import { ComponentListUserComponent } from '../component-list-user/component-list-user.component';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  componentADD :string ="<app-table></app-table>";
  componentArgument : any = ComponentListUserComponent

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    // const factory = this.resolver.resolveComponentFactory(AddEmployeeComponent); // Remplacez AppTableComponent par votre composant
    // this.container.createComponent(factory);
  }
}
