import { TestBed } from '@angular/core/testing';

import { AuthOneGuard } from './auth-one.guard';

describe('AuthOneGuard', () => {
  let guard: AuthOneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthOneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
