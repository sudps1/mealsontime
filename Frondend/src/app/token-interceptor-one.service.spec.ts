import { TestBed } from '@angular/core/testing';

import { TokenInterceptorOneService } from './token-interceptor-one.service';

describe('TokenInterceptorOneService', () => {
  let service: TokenInterceptorOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptorOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
