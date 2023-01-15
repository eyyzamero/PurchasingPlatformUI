import { TestBed } from '@angular/core/testing';
import { AuthenticationCommunicationService } from '..';

describe('AuthenticationCommunicationService', () => {
  let service: AuthenticationCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});