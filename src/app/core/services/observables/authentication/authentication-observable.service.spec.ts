import { TestBed } from '@angular/core/testing';
import { AuthenticationObservableService } from '..';

describe('AuthenticationObservableService', () => {
  let service: AuthenticationObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});