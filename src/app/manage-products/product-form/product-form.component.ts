import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Output() addEvent = new EventEmitter<Product>();

  constructor() { }

  onSubmit(form: NgForm) {
    if(form.value.code == '' ||
       form.value.name == '' ||
       form.value.category == '' ||
       form.value.price == ''){
      form.resetForm();
      return;
    }

    this.addEvent.emit(new Product(form.value.code,
                                   form.value.name,
                                   form.value.category,
                                   parseInt(form.value.price)));
  }

  ngOnInit(): void {
  }

}
