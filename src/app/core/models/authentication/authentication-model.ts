import { IAuthenticationModel } from '..';

export class AuthenticationModel implements IAuthenticationModel { 

  constructor(
    public access_token: string = ''
  ) { }
}