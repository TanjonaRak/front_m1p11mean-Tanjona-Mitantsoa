import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AddNewServiceComponent } from '../add-new-service/add-new-service.component';

@Component({
  selector: 'app-add-new-service-page',
  templateUrl: './add-new-service-page.component.html',
  styleUrls: ['./add-new-service-page.component.css']
})
export class AddNewServicePageComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  componentADD :string ="<app-table></app-table>";
  componentArgument : any = AddNewServiceComponent

  constructor(private resolver: ComponentFactoryResolver) {}
}
