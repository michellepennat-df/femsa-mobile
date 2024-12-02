interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface Checkout {
  process(total: number): void;
}
class SimpleCheckout implements Checkout {
  process(total: number): void {
    console.log("Processing payment for total: ", total);
  }
}

interface PriceCalculator {
  calculateTotal(cartItems: CartItem[]): number;
}

class SimplePriceCalculator implements PriceCalculator {
  calculateTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}

class ShoppingCart {
  private items: CartItem[] = [];

  constructor(
    private checkoutService: Checkout,
    private priceCalculatorService: PriceCalculator
  ) {}

  checkout(): void {
    const total = this.priceCalculatorService.calculateTotal(this.items);
    this.checkoutService.process(total);
  }

  addItem(cartItem: CartItem): void {
    this.items.push(cartItem);
  }

  getItems(): CartItem[] {
    return this.items;
  }
}
