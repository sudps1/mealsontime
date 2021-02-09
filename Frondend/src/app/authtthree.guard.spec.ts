import { TestBed } from '@angular/core/testing';

import { AuthtthreeGuard } from './authtthree.guard';

describe('AuthtthreeGuard', () => {
  let guard: AuthtthreeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthtthreeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
