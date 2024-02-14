import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGenerateComponent } from './modal-generate.component';

describe('ModalGenerateComponent', () => {
  let component: ModalGenerateComponent;
  let fixture: ComponentFixture<ModalGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
