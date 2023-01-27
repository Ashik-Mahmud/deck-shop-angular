import { Injectable } from '@angular/core';
import axios from 'axios';
import { Product } from 'src/app/types/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  isLoading: boolean = false;

  async getProducts() {
    this.isLoading = true;
    const { data } = await axios.get('https://dummyjson.com/products');
    this.isLoading = false;
    return data?.products;
  }
}
