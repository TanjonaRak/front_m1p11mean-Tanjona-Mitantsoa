import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AllServiceComponent } from '../all-service/all-service.component';

@Component({
  selector: 'app-all-service-page',
  templateUrl: './all-service-page.component.html',
  styleUrls: ['./all-service-page.component.css']
})
export class AllServicePageComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  componentADD :string ="<app-table></app-table>";
  componentArgument : any = AllServiceComponent

  constructor(private resolver: ComponentFactoryResolver) {}
}
