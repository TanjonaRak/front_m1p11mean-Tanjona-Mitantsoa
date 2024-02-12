import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBaseEmployeeComponent } from './component-base-employee.component';

describe('ComponentBaseEmployeeComponent', () => {
  let component: ComponentBaseEmployeeComponent;
  let fixture: ComponentFixture<ComponentBaseEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBaseEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBaseEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
