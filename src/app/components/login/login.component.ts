import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationLoginReq } from 'src/app/core/contracts/requests';
import { CommunicationState } from 'src/app/core/enums';
import { AuthenticationCommunicationService } from 'src/app/core/services/communications/authentication/authentication-communication.service';
import { AuthenticationObservableService } from 'src/app/core/services/observables';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({
    login: new FormControl(null),
    password: new FormControl(null)
  });
  communicationState: CommunicationState = CommunicationState.NONE;

  readonly CommunicationState = CommunicationState;

  private _subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authenticationCommunicationService: AuthenticationCommunicationService,
    private _authenticationObservableService: AuthenticationObservableService
  ) {
    this._authenticationObservableService.clear();
  }

  ngOnInit(): void {
    this._initObservables();
  }

  login(): void {
    if (this.form.valid) {
      const req = new AuthenticationLoginReq(this.form.controls['login'].value, this.form.controls['password'].value);
      this._authenticationCommunicationService.login(req);
    }
  }

  private _initObservables(): void {
    const authenticationSubscription = this._authenticationObservableService.observable.subscribe({
      next: (value) => {
        this.communicationState = value.communicationState;

        if (value.data.access_token != '')
          this._navigate(); 
      }
    });
    this._subscriptions.push(authenticationSubscription);
  }

  private _navigate(): void {
    const backUrl = this._activatedRoute.snapshot.queryParamMap.get('url');

    backUrl
      ? this._router.navigateByUrl(backUrl)
      : this._router.navigate(['']);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(x => x.unsubscribe());
  }
}