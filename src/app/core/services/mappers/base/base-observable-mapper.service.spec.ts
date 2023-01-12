import { TestBed } from '@angular/core/testing';

import { BaseObservableMapperService } from './base-observable-mapper.service';

describe('BaseObservableMapperService', () => {
  let service: BaseObservableMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseObservableMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
