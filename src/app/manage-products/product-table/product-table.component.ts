import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  @Input() products: Product[] = [];

  @Output() deleteEvent = new EventEmitter<Product>();

  constructor() {}

  deleteProduct(product: Product) {
    this.deleteEvent.emit(product);
  }

  ngOnInit(): void {

  }

}
