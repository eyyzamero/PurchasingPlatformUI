import { IAuthenticationLoginRes } from '../..';

export class AuthenticationLoginRes implements IAuthenticationLoginRes {

  constructor(
    public access_token: string = ''
  ) { }
}