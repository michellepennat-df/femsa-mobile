import { ProductServiceConsole } from "./application/product-service";
import { ProductSimple } from "./domain/product";
import { InMemoryProductRepository } from "./infrastructure/in-memory-product-repository";

const repository = new InMemoryProductRepository();

const productServiceConsole = new ProductServiceConsole(repository);

const newProduct = new ProductSimple("Product 1", 100, 10);

productServiceConsole.add(newProduct);
productServiceConsole.getAll();
productServiceConsole.getOne('Product 1');
productServiceConsole.remove(newProduct);
