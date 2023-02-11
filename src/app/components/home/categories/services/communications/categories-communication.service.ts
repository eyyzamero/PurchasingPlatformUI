import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BaseCommunicationService, CategoriesClientCommunicationService } from 'src/app/core/services/communications';
import { CategoriesMapperService } from '../mappers/categories-mapper.service';
import { CategoriesObservableService } from '../observables/categories-observable.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesCommunicationService extends BaseCommunicationService {

  constructor(
    private _categoriesClientCommunicationService: CategoriesClientCommunicationService,
    private _categoriesMapperService: CategoriesMapperService,
    private _categoriesObservableService: CategoriesObservableService
  ) {
    super();
  }

  getCategories(): void {
    this._categoriesClientCommunicationService.getCategories().pipe(
      map(x => this._categoriesMapperService.ICategoriesResToArrayOfICategoryModel(x))
    ).subscribe({
      next: (categories) => this._categoriesObservableService.add(categories),
      error: (error) => this._categoriesObservableService.addError(error)
    });
  }
}