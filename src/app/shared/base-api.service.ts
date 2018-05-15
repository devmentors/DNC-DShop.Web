import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseApiService {

  private readonly hostUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  protected get<TData>(url: string, isProtected: boolean = false) {

  }
}
