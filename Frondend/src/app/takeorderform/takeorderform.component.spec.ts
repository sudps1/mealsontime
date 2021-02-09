import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeorderformComponent } from './takeorderform.component';

describe('TakeorderformComponent', () => {
  let component: TakeorderformComponent;
  let fixture: ComponentFixture<TakeorderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeorderformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeorderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
