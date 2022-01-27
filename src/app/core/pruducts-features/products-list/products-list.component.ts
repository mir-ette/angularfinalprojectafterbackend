 import { Component, EventEmitter, OnInit,Output } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/_models/product/product.model'
import { productService } from 'src/app/_services/product/product.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  productsArray! : Product [];
  @Output()
  itemAdded:EventEmitter<Product>= new EventEmitter<Product>();

  // productService= new productService();
  constructor ( private productService: productService) {
    
  }
  ngOnInit(): void {this.productsArray= this.productService.getALLProducts();
      
  }
    testFun(){
      this.productsArray.push();
    }
  //   onItemAddedToCart(product : Product){ 
  //    console.log(product);
  //    this.itemAdded.emit(product)
  // }
}
// this.prodoctsArray.push();
//}
// 
