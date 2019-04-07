import { TestBed } from '@angular/core/testing';

import { NoopinterceptorService } from './noopinterceptor.service';

describe('NoopinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoopinterceptorService = TestBed.get(NoopinterceptorService);
    expect(service).toBeTruthy();
  });
});
