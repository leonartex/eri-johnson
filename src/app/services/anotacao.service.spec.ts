import { TestBed } from '@angular/core/testing';

import { AnotacaoService } from './anotacao.service';

describe('AnotacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotacaoService = TestBed.get(AnotacaoService);
    expect(service).toBeTruthy();
  });
});
