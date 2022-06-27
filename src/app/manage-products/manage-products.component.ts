import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductRepository } from './models/product.repository';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  _repository: ProductRepository;

  constructor() {
    this._repository = new ProductRepository();
  }

  deleteProduct(product: Product) {
    this._repository.deleteProduct(product);
  }

  addProduct(product: Product) {
    this._repository.addProduct(product);
  }

  ngOnInit(): void {

  }

}
