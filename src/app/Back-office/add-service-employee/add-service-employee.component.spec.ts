import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceEmployeeComponent } from './add-service-employee.component';

describe('AddServiceEmployeeComponent', () => {
  let component: AddServiceEmployeeComponent;
  let fixture: ComponentFixture<AddServiceEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
