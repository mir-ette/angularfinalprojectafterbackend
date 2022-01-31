import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductService , private router:Router) { }

  ngOnInit(): void {
  }
  onAddProduct(form: any){
    console.log(form.value);
    const product :Product = form.value;
    this.productService.addProduct(product);
    // to make route with javascript
    this.router.navigateByUrl('product-listing');
  }
}
