import { IObservableErrorModel } from '..';

export class ObservableErrorModel implements IObservableErrorModel {
  
  constructor(
		public errorCode: number = 400,
		public errorText: string = '',
		public errorId = ''
	) { }
}