import { Category } from "./category.model"

export class Product {
    
    constructor( public id: number, public name: string, public price: number, public descount: number, public imgURL: string, public category: Category) {
    }

    discountApplied(): number {
        return this.price - (this.price * this.descount / 100)
    }
}