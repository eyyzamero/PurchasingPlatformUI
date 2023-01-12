import { BehaviorSubject } from 'rxjs';
import { BaseObservableMapperService } from '../../mappers';
import { BaseObservableService } from './base-observable.service';

export abstract class BaseBehaviorSubjectObservableService<T> extends BaseObservableService<T> {

  constructor(
    clearObject: T,
    baseObservableMapperService: BaseObservableMapperService
  ) {
    super(clearObject, baseObservableMapperService);
  }

  protected _initSubject(): void {
    this.subject = new BehaviorSubject(this.observableSubject);
  }
}