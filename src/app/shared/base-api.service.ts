import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRequest } from 'selenium-webdriver/http';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  body: {}
};

const hostUrl = 'http://localhost:5000';

export abstract class BaseApiService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  protected get<TData>(url: string, isProtected: boolean = false): Observable<TData> {
    return this.request('GET', url, isProtected);
  }

  protected post<TData>(url: string, data: TData, isProtected: boolean = false): Observable<TData> {
    return this.request('POST', url, isProtected, data);
  }

  protected put<TData>(url: string, data: TData, isProtected: boolean = false): Observable<TData> {
    return this.request('GET', url, isProtected, data);
  }

  protected delete<TData>(url: string, isProtected: boolean = false): Observable<TData> {
    return this.request('GET', url, isProtected);
  }

  private request<TData>(method: string, url: string, isProtected: boolean, data?: TData): Observable<TData> {

    if (isProtected) {
      const token = this.authService.getAccessToken();
      httpOptions.headers.append('Authorization', token);
    }

    httpOptions.body = data;
    return this.http.request<TData>(method, `${hostUrl}/${url}`, httpOptions);
  }
}
