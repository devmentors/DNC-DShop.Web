import { Component, OnInit } from '@angular/core';

import { PagedResult } from './../../shared/paged-result';
import { ProductModel } from '../shared/product.model';
import { ProductsService } from './../shared/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsPage: PagedResult<ProductModel>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

}
