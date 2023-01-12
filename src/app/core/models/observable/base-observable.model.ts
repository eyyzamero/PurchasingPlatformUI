import { IBaseObservableModel, IObservableErrorModel } from '..';
import { CommunicationState } from '../../enums';

export class BaseObservableModel<T> implements IBaseObservableModel<T> {

  constructor(
    public data: T,
    public error: IObservableErrorModel | null = null,
    public communicationState: CommunicationState = CommunicationState.NONE
  ) { }
}