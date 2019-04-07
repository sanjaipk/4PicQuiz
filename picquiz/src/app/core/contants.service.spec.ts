import { TestBed } from '@angular/core/testing';

import { ContantsService } from './contants.service';

describe('ContantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContantsService = TestBed.get(ContantsService);
    expect(service).toBeTruthy();
  });
});
