import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product;
  // deleteId! :number
   @Output()
  itemAddedToCart: EventEmitter<Product> = new EventEmitter<Product>();
  productsArray: any;
  
  constructor(private productService: ProductService) { }


  ngOnInit(): void {
  }
  onDeleteProduct(product: Product){
    this.productService.deleteProduct()
    console.log(product);
  }
  // RemoveProduct(productItem : Product): void{
  //   this.productsArray.splice(this.productsArray.indexOf(this.productItem),1);
  // }
  
  onItemAdded(){
    console.log(this.productItem);
    // this.itemAddedToCart.emit(this.productItem);
    this.productService.addProductToCart(this.productItem)
  }

}

