<script lang="ts">

import {Product} from "./model/product.model"
import {Cart} from "./model/cart.model"

import ProductCard from "@/components/cart/ProductCard.vue"

export default {

  data(){
    return {
      cart: new Cart(),
      products: [new Product("Convite para um homicidio", 35.90, "Livro", 0.2), new Product("Hora zero", 35.90, "Livro", 0.2), new Product("Um gato entre os pombos", 35.90, "Livro", 0.05)],
    }
  },

  methods: {
    addItem(product: Product){

    const existItem = this.cart.list.find(item => item.product.name === product.name)
   
    if(existItem) {
      existItem.quantity += 1
      this.cart.total += 1
    } else {
      this.cart.list.push({ product, quantity: 1})
        this.cart.total += 1
    }
  },

    minusItem() {
      if(this.cart.total>0){
      this.cart.total -= 1
      }
    }
  },
  components: { ProductCard }

}

</script>

<template>

  <main>
    <div>
      <h1>Carrinho com {{ cart.total }} itens</h1>
      <div v-for="item in cart.list" :key="item.product.name">
       <div>
         <h3>{{ item.product.name }}</h3>
       </div>
       <p>Total: {{ item.quantity }}</p>
      </div>
    </div>

    <div v-for="product in products" :key="product.name">
      <ProductCard :product="product" @onClick="addItem(product)"></ProductCard>
    </div>

  </main>
</template>

<style>
</style>
