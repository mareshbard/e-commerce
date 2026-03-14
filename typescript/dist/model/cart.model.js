"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor(cartItem = []) {
        this.cartItem = cartItem;
    }
    addProduct(product, quantity) {
        const existItem = this.cartItem.find((item) => item.product.name === product.name);
        if (existItem) {
            existItem.quantity += quantity;
        }
        else {
            this.cartItem.push({ product, quantity });
        }
    }
    getFinalPrice() {
        let total = 0;
        this.cartItem.forEach((item) => {
            total += item.product.discountApplied() * item.quantity;
        });
        return total;
    }
    getTotalItems() {
        let totalItems = 0;
        this.cartItem.forEach((item) => {
            totalItems += item.quantity;
        });
        return totalItems;
    }
}
exports.Cart = Cart;
