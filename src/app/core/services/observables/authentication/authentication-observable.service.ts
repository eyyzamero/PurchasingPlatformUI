import { Injectable } from '@angular/core';
import { AuthenticationModel, IAuthenticationModel } from 'src/app/core/models';
import { environment } from 'src/environments/environment';
import { BaseBehaviorSubjectLocalStorageObservableService } from '..';
import { BaseObservableMapperService } from '../../mappers';

const DEFAULT_LOCAL_STORAGE_KEY: string = 'auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationObservableService extends BaseBehaviorSubjectLocalStorageObservableService<IAuthenticationModel> {

  constructor(
    baseObservableMapperService: BaseObservableMapperService
  ) {
    super(new AuthenticationModel(), baseObservableMapperService, environment.authentication.localStorageKey ?? DEFAULT_LOCAL_STORAGE_KEY);
  }
}