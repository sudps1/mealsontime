import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheftableComponent } from './cheftable.component';

describe('CheftableComponent', () => {
  let component: CheftableComponent;
  let fixture: ComponentFixture<CheftableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheftableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheftableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
