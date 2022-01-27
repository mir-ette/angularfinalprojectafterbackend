import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductsItemComponent } from './core/pruducts-features/products-item/products-item.component';
import { ProductsListComponent } from './core/pruducts-features/products-list/products-list.component';
import { ProductsFilterComponent } from './core/pruducts-features/products-filter/products-filter.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { productService } from './_services/product/product.service';
import { ProductsDetailsComponent } from './core/pruducts-features/products-details/products-details.component';
import { ProductsFormComponent } from './core/pruducts-features/products-form/products-form.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsItemComponent,
    ProductsListComponent,
    ProductsFilterComponent,
    DropDownComponent,
    ProductsDetailsComponent,
    ProductsFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule { }
