import { TestBed } from '@angular/core/testing';

import { CategoriesCommunicationService } from './categories-communication.service';

describe('CategoriesCommunicationService', () => {
  let service: CategoriesCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});