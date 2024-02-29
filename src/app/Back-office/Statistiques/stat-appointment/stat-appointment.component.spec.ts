import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAppointmentComponent } from './stat-appointment.component';

describe('StatAppointmentComponent', () => {
  let component: StatAppointmentComponent;
  let fixture: ComponentFixture<StatAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
