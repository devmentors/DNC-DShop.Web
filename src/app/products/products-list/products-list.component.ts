import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { ProductsQueryModel } from './../shared/products-query.model';
import { PagedResult } from './../../shared/paged-result';
import { ProductModel } from '../shared/product.model';
import { ProductsService } from './../shared/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  query: ProductsQueryModel;
  query$: Subject<ProductsQueryModel>;
  productsPage: PagedResult<ProductModel>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.query = new ProductsQueryModel();
    this.query$ = new Subject<ProductsQueryModel>();
    this.subscribeToQuery();
    this.browse(this.query);
  }

  queryChanged() {
    this.query$.next(this.query.createFromExisting());
  }

  browse(query: ProductsQueryModel) {
    this.productsService
      .browse(query)
      .subscribe(page => this.productsPage = page);
  }

  private subscribeToQuery() {
    this.query$
    .pipe(
      debounceTime(400),
      distinctUntilChanged((prev, curr) => { 
        return prev.priceFrom === curr.priceFrom 
            && prev.priceTo === curr.priceTo;
      })
    )
    .subscribe((query) => this.browse(query));
  }
}
