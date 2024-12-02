import { ProductCatalogViewModel } from "../viewmodel/product-catalog-view-model";

export class ProductView {
  private productCatalogViewModel: ProductCatalogViewModel;

  constructor(productCatalogViewModel: ProductCatalogViewModel) {
    this.productCatalogViewModel = productCatalogViewModel;
    this.productCatalogViewModel.subscribe(this.render);
  }

  private render = (products) => {
    console.log("ProductView: Products changed", products);
  };
}
