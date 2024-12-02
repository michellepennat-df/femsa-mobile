import { Product } from "../domain/product";
import { ProductRepository } from "../infrastructure/in-memory-product-repository";

interface ProductService {
  getAll(): any;
}

class ProductServiceConsole implements ProductService {
  constructor(private repository: ProductRepository) {}

  getAll() {
    const all = this.repository.getAll();
    return console.log("List of products:", all);
  }

  getOne(name: string) {
    const one = this.repository.getOne(name);
    return console.log("Search product...", one);
  }

  add(product: Product) {
    this.repository.add(product);
    console.log("Product added: ", product);
  }

  remove(product: Product) {
    this.repository.remove(product);
    console.log("Product removed!");
  }

  update(product: Product) {
    this.repository.update(product);
    console.log("Product updated: ");
  }
}

export { ProductService, ProductServiceConsole };
