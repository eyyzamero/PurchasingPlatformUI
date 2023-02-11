import { TestBed } from '@angular/core/testing';

import { CategoriesMapperService } from './categories-mapper.service';

describe('CategoriesMapperService', () => {
  let service: CategoriesMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});