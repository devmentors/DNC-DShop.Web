import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './/products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [ProductsListComponent],
  declarations: [ProductsListComponent]
})
export class ProductsModule { }
