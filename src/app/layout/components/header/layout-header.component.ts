import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationObservableService } from 'src/app/core/services/observables';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHeaderComponent implements OnInit, OnDestroy {

  login: string = '';

  private _subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(
    private _authenticationObservableService: AuthenticationObservableService
  ) { }
  
  ngOnInit(): void {
    this._initObservables();
  }

  private _initObservables(): void {
    const authenticationSubscription = this._authenticationObservableService.observable.subscribe({
      next: (value) => this.login = value.data.payload?.login ?? ''
    });
    this._subscriptions.push(authenticationSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(x => x.unsubscribe());
  }
}