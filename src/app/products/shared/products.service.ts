import { AuthService } from './../../shared/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductModel } from './product.model';
import { BaseApiService } from '../../shared/base-api.service';
import { PagedResult } from '../../shared/paged-result';

const productMocks: ProductModel[] = [
 { id: 'id1', name: 'product1', description: 'Great product1', vendor: 'Vendor', price: 12.78 },
 { id: 'id2', name: 'product2', description: 'Great product2', vendor: 'Vendor', price: 12.45 },
 { id: 'id3', name: 'product3', description: 'Great product3', vendor: 'Vendor', price: 32.45 },
 { id: 'id4', name: 'product4', description: 'Great product4', vendor: 'Vendor', price: 12.45 },
 { id: 'id5', name: 'product5', description: 'Great product5', vendor: 'Vendor', price: 238.45 },
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseApiService {

  constructor(http: HttpClient, authService: AuthService) { 
    super(http, authService);
  }
}
