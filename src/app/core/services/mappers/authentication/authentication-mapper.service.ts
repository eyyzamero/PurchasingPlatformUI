import { Injectable } from '@angular/core';
import { IAuthenticationLoginRes } from 'src/app/core/contracts/responses';
import { AuthenticationModel, IAuthenticationModel, IJwtModel } from 'src/app/core/models';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationMapperService {

  constructor() { }

  iAuthenticationLoginResToIAuthenticationModel(src: IAuthenticationLoginRes): IAuthenticationModel {
    const payload = jwt_decode(src.access_token) as IJwtModel;
    const dest = new AuthenticationModel(src.access_token, payload);
    return dest;
  }
}