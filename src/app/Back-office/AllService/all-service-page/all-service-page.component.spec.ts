import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServicePageComponent } from './all-service-page.component';

describe('AllServicePageComponent', () => {
  let component: AllServicePageComponent;
  let fixture: ComponentFixture<AllServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllServicePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
