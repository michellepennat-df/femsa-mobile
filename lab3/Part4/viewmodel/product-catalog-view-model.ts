import { Product } from "../model/product";

type Listener<T> = (items: T) => void;

export class ProductCatalogViewModel {
  private products: Product[] = [];
  private listeners: Listener<Product[]>[] = [];

  public getProducts(): Product[] {
    return this.products;
  }

  public addProduct(product: Product): void {
    this.products.push(product);
    this.notify();
  }

  public removeProduct(id: string): void {
    this.products = this.products.filter((p) => p.id !== id);
    this.notify();
  }

  public subscribe(listener: Listener<Product[]>): void {
    this.listeners.push(listener);
  }

  public unsubscribe(listener: Listener<Product[]>): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  private notify(): void {
    this.listeners.forEach((listener) => listener(this.products));
  }
}
