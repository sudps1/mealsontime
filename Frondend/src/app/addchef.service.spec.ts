import { TestBed } from '@angular/core/testing';

import { AddchefService } from './addchef.service';

describe('AddchefService', () => {
  let service: AddchefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddchefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
