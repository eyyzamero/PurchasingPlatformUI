import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommunicationState } from 'src/app/core/enums';
import { BaseObservableModel, IBaseObservableModel } from 'src/app/core/models';

export interface IBaseObservableService<T> {
  observable: Observable<IBaseObservableModel<T>>;
	observableSubjectValue: BaseObservableModel<T>;

	add(value: T, next?: boolean): void;
	clear(next?: boolean): void;
	next(): void;
	addCommunicationState(state: CommunicationState, next?: boolean): void;
	addError(error: HttpErrorResponse, errorText?: string, next?: boolean): void;
	clearError(next?: boolean): void;
}