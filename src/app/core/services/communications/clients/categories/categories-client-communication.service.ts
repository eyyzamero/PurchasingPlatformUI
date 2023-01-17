import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoriesRes } from 'src/app/core/contracts/responses';
import { environment } from 'src/environments/environment';
import { BaseCommunicationService } from '../../base/base-communication.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesClientCommunicationService extends BaseCommunicationService {

  constructor(
    private _httpClient: HttpClient
  ) {
    super();
  }

  getCategories(): Observable<ICategoriesRes> {
    return this._httpClient.get<ICategoriesRes>(`${environment.apiUrl}/categories`);
  }
}