import { TestBed } from '@angular/core/testing';

import { CategoriesObservableService } from './categories-observable.service';

describe('CategoriesObservableService', () => {
  let service: CategoriesObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
