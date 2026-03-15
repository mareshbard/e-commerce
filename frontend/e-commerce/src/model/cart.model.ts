import type {Product} from "./product.model"

interface CartItem {
    product: Product,
    quantity: number
}

export class Cart {
    constructor(public total: number = 0, public list: CartItem[] = []){

    }
}