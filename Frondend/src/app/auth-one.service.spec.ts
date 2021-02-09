import { TestBed } from '@angular/core/testing';

import { AuthOneService } from './auth-one.service';

describe('AuthOneService', () => {
  let service: AuthOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
