import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnePageComponent } from './personne-page.component';

describe('PersonnePageComponent', () => {
  let component: PersonnePageComponent;
  let fixture: ComponentFixture<PersonnePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
