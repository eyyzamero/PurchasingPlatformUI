import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IObservableErrorModel, ObservableErrorModel } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class BaseObservableMapperService {

  constructor() { }

  httpErrorResponseToIObservableErrorModel(src: HttpErrorResponse, errorText: string = '', dest: IObservableErrorModel = new ObservableErrorModel()): IObservableErrorModel {
    dest.errorCode = src.status;
    dest.errorId = src.statusText;
    dest.errorText = errorText ? errorText : src.message;
    return dest;
  }
}