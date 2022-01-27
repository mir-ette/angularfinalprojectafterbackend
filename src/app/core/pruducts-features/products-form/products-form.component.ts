import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/_models/product/product.model';
import { productService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.sass']
})
export class ProductsFormComponent implements OnInit {

  constructor(private productService:productService,private router:Router) { }

  ngOnInit(): void {
  }
onAddedProduct(Form:NgForm){
  console.log(Form.value);

  const product :Product=Form.value
  this.productService.addProduct(product)
  this.router.navigateByUrl('home')
}
}
