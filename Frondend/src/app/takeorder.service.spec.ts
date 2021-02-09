import { TestBed } from '@angular/core/testing';

import { TakeorderService } from './takeorder.service';

describe('TakeorderService', () => {
  let service: TakeorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
