import { type Product } from "./product.model";

interface cartItem {
  product: Product;
  quantity: number;
}

export class Cart {
  constructor(public cartItem: cartItem[] = []) {}

  public addProduct(product: Product, quantity: number) {
    const existItem = this.cartItem.find(
      (item) => item.product.name === product.name,
    );
    if (existItem) {
      existItem.quantity += quantity;
    } else {
      this.cartItem.push({ product, quantity });
    }
  }

  public getFinalPrice(): number {
    let total = 0;
    this.cartItem.forEach((item) => {
      total += item.product.discountApplied() * item.quantity;
    });
    return total;
  }
  
  public getTotalItems(): number {
    let totalItems = 0;
    this.cartItem.forEach((item) => {
      totalItems += item.quantity;
    });
    return totalItems;
  }
}
