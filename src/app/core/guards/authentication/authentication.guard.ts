import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, PRIMARY_OUTLET, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { AuthenticationObservableService } from '../../services/observables';
import { IAuthenticationModel } from '../../models';
import { JwtService } from '../../services';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanMatch {

  constructor(
    private _router: Router,
    private _location: Location,
    private _jwtService: JwtService,
    private _authenticationObservableService: AuthenticationObservableService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this._checkIfAuthIsInLocalStorage(state);
  }

  canMatch(route: Route, segments: Array<UrlSegment>): Observable<boolean> | boolean {
    return this._checkIfAuthIsInLocalStorage();
  }

  private _checkIfAuthIsInLocalStorage(state?: RouterStateSnapshot): boolean {
    const localStorageItem = this._authenticationObservableService.observableSubjectValue?.data;
    const result = (localStorageItem && this._checkIfTokenIsUpToDate(localStorageItem)) || this._navigateToLoginPage(state);
    return result;
  }

  private _checkIfTokenIsUpToDate(localStorageItem: IAuthenticationModel): boolean {
    return this._jwtService.checkIfTokenIsUpToDate(localStorageItem.access_token);
  }

  private _navigateToLoginPage(state?: RouterStateSnapshot): boolean {
    if (this._router.parseUrl(this._router.url).root.children[PRIMARY_OUTLET]?.segments[0].path !== 'login') {
      this._authenticationObservableService.clear();
      this._router.navigate(['login'], {
        queryParams: {
          url: state && state.url !== '' ? state.url : this._location.path() === '' ? '/' : this._location.path()
        }
      });
    }
    return false;
  }
}