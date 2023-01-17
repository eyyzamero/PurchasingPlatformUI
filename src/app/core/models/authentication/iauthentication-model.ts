import { IJwtModel } from '../jwt/ijwt-model';

export interface IAuthenticationModel {
  access_token: string;
  payload?: IJwtModel;
}