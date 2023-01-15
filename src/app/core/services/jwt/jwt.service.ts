import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { IJwtModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  checkIfTokenIsUpToDate(token: string): boolean {
    try {
      const decodedToken = jwtDecode(token) as IJwtModel;
      const tokenExpireDate = new Date(decodedToken.exp * 1000);
      const tokenIsUpToDate = Date.now() <= tokenExpireDate.getTime();
      return tokenIsUpToDate;
    } catch (ex) {
      return false;
    }
	}
}