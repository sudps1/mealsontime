import { TestBed } from '@angular/core/testing';

import { AddfoodService } from './addfood.service';

describe('AddfoodService', () => {
  let service: AddfoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
