import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientordersComponent } from './patientorders.component';

describe('PatientordersComponent', () => {
  let component: PatientordersComponent;
  let fixture: ComponentFixture<PatientordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
