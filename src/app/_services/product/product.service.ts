import { EventEmitter } from "@angular/core";
import { Product } from "src/app/_models/product/product.model";

export class ProductService {
    productsArray: Product[] = [
        {id:1,name:'Iphone',price:200,discount:20,imageUrl:'https://picsum.photos/200/300',Count:1},
        {id:2,name:'Ipad',price:1200,discount:150,imageUrl:'https://picsum.photos/200/301',Count:1},
        {id:3,name:'Mac',price:2100,discount:400,imageUrl:'https://picsum.photos/200/302',Count:1},
        {id:4,name:'MacAir',price:3200,discount:10,imageUrl:'https://picsum.photos/200/303',Count:1},
        {id:5,name:'MacAirPro',price:4200,discount:300,imageUrl:'https://picsum.photos/200/304',Count:1},
        {id:6,name:'Airbods',price:100,discount:0,imageUrl:'https://picsum.photos/200/305',Count:1},
        {id:7,name:'MacPC',price:8000,discount:30,imageUrl:'https://picsum.photos/200/306',Count:1},
        {id:8,name:'AppleTV',price:3000,discount:200,imageUrl:'https://picsum.photos/200/307',Count:1}
      ];
    private cartArray: Product[] =[];
    cartHasBeenChanged :EventEmitter<Product []> = new EventEmitter<Product []>();
    constructor(){

    }
    getAllProducts(): Product []{
        return this.productsArray.splice(0);
    }
    getProductById(){}
    addProduct(product: Product){
        this.productsArray.push(product);
    }
    updateProduct(){}
    deleteProduct(){}
    addProductToCart(product:Product){
        console.log(product);
        if(this.cartArray.includes(product))
        {
          product.Count++;
        }else{
          this.cartArray.push(product);
          this.cartHasBeenChanged.emit(this.cartArray);
        }

    }


}