import { IAuthenticationLoginReq } from '../..';

export class AuthenticationLoginReq implements IAuthenticationLoginReq {

  constructor(
    public login: string = '',
    public password: string = ''
  ) { }
}