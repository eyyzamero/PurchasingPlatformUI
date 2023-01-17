import { IAuthenticationModel, IJwtModel } from '..';

export class AuthenticationModel implements IAuthenticationModel { 

  constructor(
    public access_token: string = '',
    public payload?: IJwtModel
  ) { }
}