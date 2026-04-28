import type {Product} from "./product.model"

export interface CartItem {
    product: Product,
    quantity: number
}

export class Cart {
    constructor(public total: number = 0, public list: CartItem[] = []){

    }

    addItem(product: Product) {
        if(this.productExists(product)) {
                this.list = this.list.map((item) => {
                    return item.product.name === product.name ? {...item, quantity: item.quantity + 1} : item
                })
        } else {
            this.list.push({ product, quantity: 1})
        }
        this.total += product.price * (1-product.discount)
    }

    removeItem(product: Product) {
        if(!this.productExists(product)) return
        const itemQtd = this.list.find((i) => i.product.name === product.name)?.quantity
        this.list = this.list.filter((i) => i.product.name !== product.name)
        this.total -= product.price * (1-product.discount) * (itemQtd ? itemQtd : 0)
    }

    decrementItem(product: Product) {
        if(!this.productExists(product)) return
        if(this.list.find((i) => i.product.name === product.name)?.quantity === 1){
            this.removeItem(product)
            return
        }
       this.list = this.list.map((i) =>
      i.product.name === product.name ? { ...i, quantity: i.quantity - 1 } : i,
    )
    this.total -= product.price * (1 - product.discount)
  }


    productExists(product: Product) {
        return this.list.some((i) => i.product.name === product.name)
    }

    getTotalPrice() {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(
            this.total
        )
    }
}
