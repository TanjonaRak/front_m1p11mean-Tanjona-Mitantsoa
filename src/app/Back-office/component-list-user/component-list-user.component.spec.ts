import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListUserComponent } from './component-list-user.component';

describe('ComponentListUserComponent', () => {
  let component: ComponentListUserComponent;
  let fixture: ComponentFixture<ComponentListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentListUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
