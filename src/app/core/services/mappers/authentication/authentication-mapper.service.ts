import { Injectable } from '@angular/core';
import { IAuthenticationLoginRes } from 'src/app/core/contracts/responses';
import { AuthenticationModel, IAuthenticationModel } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationMapperService {

  constructor() { }

  iAuthenticationLoginResToIAuthenticationModel(src: IAuthenticationLoginRes): IAuthenticationModel {
    const dest = new AuthenticationModel(src.access_token);
    return dest;
  }
}