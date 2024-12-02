import { Product } from "./model/product";
import { ProductCatalogViewModel } from "./viewmodel/product-catalog-view-model";

const viewModel = new ProductCatalogViewModel();

console.log("Adding products...");
viewModel.addProduct(new Product("1", "Frijol", 1200));
viewModel.addProduct(new Product("2", "Quipitos", 800));

console.log("List products:");
viewModel.getProducts().forEach((product) => console.log(product));

console.log("Removing product with id 1...");
viewModel.removeProduct("1");

console.log("Existing products:");
viewModel.getProducts().forEach((product) => console.log(product));