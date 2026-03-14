"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, descount, imgURL, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.descount = descount;
        this.imgURL = imgURL;
        this.category = category;
    }
    discountApplied() {
        return this.price - (this.price * this.descount / 100);
    }
}
exports.Product = Product;
