import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] | any = [];
  isLoading: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const products = this.productService.getProducts();
    products.then((data) => {
      this.products = data;
    });
    this.isLoading = this.productService.isLoading;
    console.log(this.products, this.isLoading);
  }
}
