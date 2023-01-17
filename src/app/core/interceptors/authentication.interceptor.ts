import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { AuthenticationObservableService } from '../services/observables';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {

	constructor(
		private router: Router,
		private _authenticationObservableService: AuthenticationObservableService
	) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		req = req.clone({
			setHeaders: {
				'Authorization': `Bearer ${this._authenticationObservableService.observableSubjectValue.data?.access_token}`
			}
		});

		return next.handle(req).pipe(
			tap({
				error: (error: HttpErrorResponse) => {
					switch (error.status) {
						case 401:
							let primaryRouterUrl = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET];
							if (!primaryRouterUrl || primaryRouterUrl.segments[0].path !== 'login') {
								this._authenticationObservableService.clear();
								this.router.navigate(['login'], {
									queryParams: {
										url: this.router.url !== '/' ? this.router.url : null
									}
								});
							}
							break;
						default:
							console.log(`error: ${error.message}`);
							return;
					}
				}
			})
		);
	}
}