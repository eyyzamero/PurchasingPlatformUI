import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationState } from 'src/app/core/enums';
import { ICategoryModel } from './models';
import { CategoriesCommunicationService } from './services/communications/categories-communication.service';
import { CategoriesObservableService } from './services/observables/categories-observable.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories: Array<ICategoryModel> = new Array<ICategoryModel>();
  communicationState: CommunicationState = CommunicationState.NONE;

  readonly CommunicationState = CommunicationState;

  private _subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(
    private _categoriesCommunicationService: CategoriesCommunicationService,
    private _categoriesObservableService: CategoriesObservableService
  ) {
    this._categoriesCommunicationService.getCategories();
  }

  ngOnInit(): void {
    this._initObservables();
  }

  private _initObservables(): void {
    const categoriesSubscription = this._categoriesObservableService.observable.subscribe({
      next: (value) => {
        this.communicationState = value.communicationState;
        this.categories = value.data;

        console.log(this.categories);
      }
    });
    this._subscriptions.push(categoriesSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(x => x.unsubscribe());
  }
}