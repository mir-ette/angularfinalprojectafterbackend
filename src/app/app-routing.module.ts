import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { ProductsDetailsComponent } from './core/pruducts-features/products-details/products-details.component';
import { ProductsFormComponent } from './core/pruducts-features/products-form/products-form.component';
import { ProductsListComponent } from './core/pruducts-features/products-list/products-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path:'home',component:ProductsListComponent},
  {path:'',redirectTo:'',pathMatch:"full"},
  {path:'product-list',component:ProductsListComponent},
  {path:'product-details',component:ProductsDetailsComponent},
  {path:'product-add',component:ProductsFormComponent},
  {path:'**',component:NotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
