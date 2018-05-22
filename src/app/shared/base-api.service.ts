import { PagedResult } from './paged-result';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TData } from '@angular/core/src/render3/interfaces/view';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  body: {},
  observe: 'response' as 'body'
};

const hostUrl = 'http://localhost:5000';
const totalCountHeader = 'X-Total-Count';

export abstract class BaseApiService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  protected get<TData>(url: string, isProtected: boolean = false): Observable<TData> {
    return this
      .request<TData>('GET', url, isProtected)
      .pipe(map(response => response.body));      
  }

  protected pagedResult<TData>(url: string, isProtected: boolean = false): Observable<PagedResult<TData>> {
    return this
    .request<TData[]>('GET', url, isProtected)
    .pipe(map(response => { 
      const totalResults = <number> JSON.parse(response.headers.get(totalCountHeader));
      return new PagedResult(totalResults, response.body);
    }));
  }      

  protected post<TData>(url: string, data: TData, isProtected: boolean = false): Observable<TData> {
    return this
      .request<TData>('POST', url, isProtected, data)
      .pipe(map(response => response.body));      
  }

  protected put<TData>(url: string, data: TData, isProtected: boolean = false): Observable<TData> {
    return this
      .request<TData>('GET', url, isProtected, data)
      .pipe(map(response => response.body));      
  }

  protected delete<TData>(url: string, isProtected: boolean = false): Observable<TData> {
    return this
      .request<TData>('GET', url, isProtected)
      .pipe(map(response => response.body));
  }

  private request<TData>(method: string, url: string, isProtected: boolean, data?: TData): Observable<HttpResponse<TData>> {
    if (isProtected) {
      const token = this.authService.getAccessToken();
      httpOptions.headers.append('Authorization', token);
    }

    httpOptions.body = data;
    return this.http.request<HttpResponse<TData>>(method, `${hostUrl}/${url}`, httpOptions);
  }
}
