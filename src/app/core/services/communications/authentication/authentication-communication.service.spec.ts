import { TestBed } from '@angular/core/testing';

import { AuthenticationCommunicationService } from './authentication-communication.service';

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