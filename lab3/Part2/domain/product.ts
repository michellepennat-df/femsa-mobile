interface Product {
  name: string;
  price: number;
  quantity: number;
}

class ProductSimple implements Product {
  name: string;
  price: number;
  quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

export { Product, ProductSimple };
