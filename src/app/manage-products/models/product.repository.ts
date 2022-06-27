import { isNull } from "@angular/compiler/src/output/output_ast";
import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository {
  private dataSource: SimpleDataSource = new SimpleDataSource();
  private products: Product[];

  constructor() {
    this.products = this.dataSource.getData();
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    if(product != null){
      this.products.push(product);
      // Update dataSource would go here.
    } else {
      console.log("There was an issue adding the Product to the list.");
    }
  }

  deleteProduct(product: Product) {
    if (product == null){
      return;
    }

    // Loop backwards through the array to remove the item and reindex
    for (let i = this.products.length; i >= 0; i--) {
      if (this.products[i] === product) {
        this.products.splice(i, 1);
      }
    }
  }
}
