import { Component, Input, OnInit } from '@angular/core';
import { ProductsItemComponent } from 'src/app/core/pruducts-features/products-item/products-item.component';
import { Product, ProductWithCounter } from 'src/app/_models/product/product.model';
import { productService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
// @Input()
//  addedProducts:ProductWithCounter[] =[]
dropdownOpened=false;
  // addedProducts: ProductWithCounter | undefined;
  // addedProducts: ProductWithCounter | undefined;
  // productService= new productService() ;
  constructor(private productService :productService) {
   
   }

  ngOnInit(): void {
    this.productService.cartHasBeenChanged. subscribe( 
      (res)=>{
        this.addedProducts=res;
      },
      (err)=>{},
      ()=>{}
    ) 
  }
}
    
// const productItem =new ProductItemComponent(productService:productService);
// class  productItem{
//   productService
//   constructor(private productService:productService)
//   this.productService=productService
// }
// }