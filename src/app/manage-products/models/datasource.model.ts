import { Product } from "./product.model";


export class SimpleDataSource {
  private _data: Product[];

  constructor() {
    this._data = new Array<Product>(
      new Product('100', 'Cap', 'Winter wear', 200),
      new Product('200', 'Jacket', 'Winter wear', 1000),
      new Product('300', 'Coat', 'Winter wear', 2090),
      new Product('400', 'Gloves', 'Winter wear', 100),
      new Product('500', 'Guitar', 'Musical instruments', 350),
    )
  }

  getData(): Product[] {
    return this._data;
  }
}
