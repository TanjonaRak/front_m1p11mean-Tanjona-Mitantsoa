import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMeetUpComponent } from './modal-meet-up.component';

describe('ModalMeetUpComponent', () => {
  let component: ModalMeetUpComponent;
  let fixture: ComponentFixture<ModalMeetUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMeetUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMeetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
