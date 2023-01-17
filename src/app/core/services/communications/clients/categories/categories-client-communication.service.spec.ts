import { TestBed } from '@angular/core/testing';

import { CategoriesClientCommunicationService } from './categories-client-communication.service';

describe('CategoriesClientCommunicationService', () => {
  let service: CategoriesClientCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesClientCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});