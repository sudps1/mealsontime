import { TestBed } from '@angular/core/testing';

import { AuthTwoService } from './auth-two.service';

describe('AuthTwoService', () => {
  let service: AuthTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
