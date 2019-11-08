import { TestBed } from '@angular/core/testing';

import { EriJService } from './eri-j.service';

describe('EriJService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EriJService = TestBed.get(EriJService);
    expect(service).toBeTruthy();
  });
});
