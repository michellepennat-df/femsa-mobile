class ShoppingCart {
  private items: { name: string; price: number; quantity: number }[] = [];

  addItem(name: string, price: number, quantity: number): void {
    this.items.push({ name, price, quantity });
  }

  calculateTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  checkout(): void {
    // Simulate checkout process
    console.log("Processing payment for total:", this.calculateTotal());
  }
}
