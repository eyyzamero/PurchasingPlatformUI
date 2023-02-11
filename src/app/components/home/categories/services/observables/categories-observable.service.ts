import { Injectable } from '@angular/core';
import { BaseObservableMapperService } from 'src/app/core/services/mappers';
import { BaseBehaviorSubjectObservableService } from 'src/app/core/services/observables';
import { ICategoryModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesObservableService extends BaseBehaviorSubjectObservableService<Array<ICategoryModel>> {

  constructor(
    baseObservableMapperService: BaseObservableMapperService
  ) {
    super(new Array<ICategoryModel>(), baseObservableMapperService);
  }
}