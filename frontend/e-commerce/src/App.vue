<script lang="ts">

import {Product} from "./model/product.model"
import {Cart} from "./model/cart.model"

import ProductCard from "@/components/cart/ProductCard.vue"
import CartItem from "@/components/cart/CartItem.vue"


export default {

  data(){
    return {
      cart: new Cart(),
      products: [new Product("Convite para um homicidio", 35.90, "Livro", 0.2), new Product("Hora zero", 35.90, "Livro", 0.2), new Product("Um gato entre os pombos", 35.90, "Livro", 0.05)],
    }
  },

  methods: {
    addItem(product: Product){
   this.cart.addItem(product)
  },

    decrementItem(product: Product){
   this.cart.decrementItem(product)
    },
    removeItem(product: Product){
      this.cart.removeItem(product)
    }
  },
  components: { ProductCard, CartItem }

}

</script>

<template>

  <main>
    <div>
      <CartItem v-for="item in cart.list" :key="item.product.name" :item="item" @removeItem="removeItem" @decrementItem="decrementItem"></CartItem>
    </div>
    <section class="gap-10 grid grid-cols-1 sm:grid-cols2 md:grid-cols-3">
<div v-for="product in products" :key="product.name">
      <ProductCard :product="product" @onClick="addItem(product)"></ProductCard>
    </div>
    </section>
    
  </main>
</template>

<style>
</style>
