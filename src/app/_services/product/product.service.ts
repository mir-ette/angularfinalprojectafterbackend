import { EventEmitter, Injectable } from "@angular/core";
import{Product, ProductWithCounter} from "src/app/_models/product/product.model"
@Injectable({
    providedIn: 'root'
  })
export class productService
{
   
   productsArray :Product []= [{id:1, name:'IPHONE',price:2000 ,discount:20,imageUrl:"http://picsum.photos/200/300"},
   {id:2, name:'laptop',price:2000 ,discount:20,imageUrl:"http://picsum.photos/200/305"},
   {id:3, name:'mic',price:8000 ,discount:80,imageUrl:"http://picsum.photos/200/309"},
   {id:4, name:'screen',price:9000 ,discount:20,imageUrl:"http://picsum.photos/200/308"},
   {id:5, name:'printer',price:1000 ,imageUrl:"http://picsum.photos/200/307"},
   {id:6, name:'mobile',price:2000 ,discount:20,imageUrl:"http://picsum.photos/200/308"},
   {id:7, name:'tv',price:4000 ,imageUrl:"http://picsum.photos/200/309"},
   {id:8, name:'tablet',price:6000 ,discount:30,imageUrl:"http://picsum.photos/200/304"}
 
     ];
   
 private cartArray:ProductWithCounter[]=[];
cartHasBeenChanged : EventEmitter<ProductWithCounter>=new  EventEmitter<ProductWithCounter>();
    constructor(){

  
    }
getALLProducts() : Product[]{
    return this.productsArray;
}

getProductById(){}

addProduct(product:Product){this.productsArray.push(product)}
updateProduct(){}
deleteProduct(){}
addProductToCart(product :Product){
     
console.log(product);
//logic
const newProduct:ProductWithCounter={...product, cartCounter:1}
this.cartArray.push(newProduct) ;
this.cartHasBeenChanged.emit(this.cartArray)
}
}


// getAllProduct    