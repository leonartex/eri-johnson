import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteFotoPage } from './teste-foto.page';

describe('TesteFotoPage', () => {
  let component: TesteFotoPage;
  let fixture: ComponentFixture<TesteFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteFotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
