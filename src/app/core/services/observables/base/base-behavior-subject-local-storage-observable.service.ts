import { IBaseObservableModel } from 'src/app/core/models';
import { BaseObservableMapperService } from '../../mappers';
import { BaseBehaviorSubjectObservableService } from './base-behavior-subject-observable.service';

export abstract class BaseBehaviorSubjectLocalStorageObservableService<T> extends BaseBehaviorSubjectObservableService<T> {

  constructor(
    clearObject: T,
    baseObservableMapperService: BaseObservableMapperService,
    private _key: string
  ) {
    super(clearObject, baseObservableMapperService);

    if (!this.observableSubjectValue.data)
      this._setLocalStorageItem(this.cleanObservableSubject);
  }

  override get observableSubjectValue(): IBaseObservableModel<T> {
		const localStorageItem = localStorage.getItem(this._key) ?? String(null);
		this.observableSubject.data = JSON.parse(localStorageItem) as T;
		return this.observableSubject;
	}

  override add(value: T, next: boolean = false): void {
		this._setLocalStorageItem(value);
    
    if (next)
      this.next();
	}

  override clear(next?: boolean): void {
    this._setLocalStorageItem(this.cleanObservableSubject);

    if (next)
      this.next();
  }

	private _setLocalStorageItem(value: T): void {
		super.add(value, false);
		localStorage.setItem(this._key, JSON.stringify(value));
	}
}