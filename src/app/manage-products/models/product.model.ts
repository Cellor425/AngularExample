export class Product {

  private _code : string;
  public get code() : string {
    return this._code;
  }
  public set code(v : string) {
    this._code = v;
  }


  private _name : string;
  public get name() : string {
    return this._name;
  }
  public set name(v : string) {
    this._name = v;
  }


  private _category : string;
  public get category() : string {
    return this._category;
  }
  public set category(v : string) {
    this._category = v;
  }


  private _price : number;
  public get price() : number {
    return this._price;
  }
  public set price(v : number) {
    this._price = v;
  }


  constructor(code: string, name: string, category: string, price: number) {
    this._code = code;
    this._name = name;
    this._category = category;
    this._price = price;
  }
}
