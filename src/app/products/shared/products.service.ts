import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './../../shared/auth.service';
import { ProductModel } from './product.model';
import { BaseApiService } from '../../shared/base-api.service';
import { PagedResult } from '../../shared/paged-result';
import { ProductsQueryModel } from './products-query.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseApiService {

  constructor(http: HttpClient, authService: AuthService) { 
    super(http, authService);
  }

  browse(query: ProductsQueryModel) : Observable<PagedResult<ProductModel>> {
    return super.pagedResult<ProductModel>('products', query, false);
  }
}
