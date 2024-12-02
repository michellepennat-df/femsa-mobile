import { Product } from "../domain/product";

interface ProductRepository {
  getAll(): Product[];
  getOne(name: string): Product | undefined;
  add(product: Product): void;
  remove(product: Product): void;
  update(product: Product): void;
}

class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  getAll(): Product[] {
    return this.products;
  }

  getOne(name: string): Product | undefined {
    return this.products.find((product) => product.name === name);
  }

  add(product: Product): void {
    this.products.push(product);
  }

  remove(product: Product): void {
    this.products = this.products.filter((p) => p.name !== product.name);
  }

  update(product: Product): void {
    this.products = this.products.map((p) =>
      p.name === product.name ? product : p
    );
  }
}

export { ProductRepository, InMemoryProductRepository };
