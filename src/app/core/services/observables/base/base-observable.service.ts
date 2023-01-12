import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Observable, Subject } from 'rxjs';
import { CommunicationState } from 'src/app/core/enums';
import { BaseObservableModel, IBaseObservableModel } from 'src/app/core/models';
import { IBaseObservableService } from '..';
import { BaseObservableMapperService } from '../../mappers';

export abstract class BaseObservableService<T> implements IBaseObservableService<T> {

  get observable(): Observable<IBaseObservableModel<T>> {
		return this.subject.asObservable();
	}

	get observableSubjectValue(): BaseObservableModel<T> {
		return this.observableSubject;
	}
  
  protected cleanObservableSubject: T;
	protected observableSubject: IBaseObservableModel<T>;
	protected subject: Subject<IBaseObservableModel<T>> = new Subject();

  constructor(
    clearObject: T,
		protected _baseObservableMapperService: BaseObservableMapperService
  ) {
    this.cleanObservableSubject = _.cloneDeep(clearObject);
		this.observableSubject = new BaseObservableModel(clearObject);
		this._initSubject();
  }

  protected abstract _initSubject(): void;

  add(value: T, next: boolean = true): void {
		this.observableSubject.communicationState = CommunicationState.LOADED;
		this.observableSubject.data = value;

    if (next)
		  this.next();
	}

  clear(next: boolean = true): void {
		this.observableSubject.data = _.cloneDeep(this.cleanObservableSubject);
		this.clearError(false);

    if (next)
		  this.next();
	}

  next(): void {
		this.subject.next(_.cloneDeep(this.observableSubject));
	}

  addCommunicationState(state: CommunicationState, next: boolean = true): void {
		this.observableSubject.communicationState = state;

    if (next)
		  this.next();
	}

  addError(error: HttpErrorResponse, errorText: string = '', next: boolean = true): void {
		this._addErrorBase(error, errorText);
    
    if (next)
		  this.next();
	}

  clearError(next: boolean = true): void {
    this.observableSubject.error = null;

    if (next)
      this.next();
  }

  protected _addErrorBase(error: HttpErrorResponse, errorText: string = ''): void {
		this.observableSubject.communicationState = CommunicationState.ERROR;
		this.observableSubject.error = this._baseObservableMapperService.httpErrorResponseToIObservableErrorModel(error, errorText);
	}
}