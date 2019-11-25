import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EriJohnsonPage } from './eri-johnson.page';

describe('EriJohnsonPage', () => {
  let component: EriJohnsonPage;
  let fixture: ComponentFixture<EriJohnsonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EriJohnsonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EriJohnsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
