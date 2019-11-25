import { TestBed, async, inject } from '@angular/core/testing';

import { SessionInversoGuard } from './session-inverso.guard';

describe('SessionInversoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionInversoGuard]
    });
  });

  it('should ...', inject([SessionInversoGuard], (guard: SessionInversoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
