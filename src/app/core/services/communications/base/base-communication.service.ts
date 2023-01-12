import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseCommunicationService {

  protected cancelPendingRequests$ = new Subject<void>();
	protected cancelPendingObservable: Observable<void>

  constructor() {
    this.cancelPendingObservable = this.cancelPendingRequests$.asObservable();
  }
}