import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, takeUntil } from 'rxjs';
import { IAuthenticationLoginReq } from 'src/app/core/contracts/requests';
import { IAuthenticationLoginRes } from 'src/app/core/contracts/responses';
import { CommunicationState } from 'src/app/core/enums';
import { environment } from 'src/environments/environment';
import { AuthenticationMapperService } from '../../mappers';
import { AuthenticationObservableService } from '../../observables';
import { BaseCommunicationService } from '../base/base-communication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationCommunicationService extends BaseCommunicationService {

  constructor(
    private _httpClient: HttpClient,
    private _authenticationObservableService: AuthenticationObservableService,
    private _authenticationMapperService: AuthenticationMapperService
  ) {
    super();
  }

  login(req: IAuthenticationLoginReq): void {
    this.cancelPendingRequests$.next();
    this._authenticationObservableService.addCommunicationState(CommunicationState.LOADING);

    this._httpClient.post<IAuthenticationLoginRes>(`${environment.authentication.serverURL}/authentication/login`, req).pipe(
      takeUntil(this.cancelPendingObservable),
      map(response => this._authenticationMapperService.iAuthenticationLoginResToIAuthenticationModel(response))
    ).subscribe({
      next: (value) => this._authenticationObservableService.add(value),
      error: (error) => this._authenticationObservableService.addError(error)
    });
  }
}