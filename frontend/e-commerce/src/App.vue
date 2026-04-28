<script lang="ts">
import { Product } from './model/product.model'
import { Cart } from './model/cart.model'
import  ListBox  from 'primevue/listbox'

import ProductCard from '@/components/cart/ProductCard.vue'
import CartItem from '@/components/cart/CartItem.vue'

export default {
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product('Convite para um homicidio', 35.9, 'Livro', 0.2),
        new Product('Hora zero', 35.9, 'Livro', 0.2),
        new Product('Um gato entre os pombos', 35.9, 'Livro', 0.05),
      ],
    }
  },

  methods: {
    addItem(product: Product) {
      this.cart.addItem(product)
    },

    decrementItem(product: Product) {
      this.cart.decrementItem(product)
    },
    removeItem(product: Product) {
      this.cart.removeItem(product)
    },
  },
  components: { ProductCard, CartItem },
}
</script>

<template>
  <main>
    <h2>Carrinho</h2>
    <div v-if="cart.list.length > 0" class="flex flex-col gap-5">
  
        <CartItem
          v-for="item in cart.list"
          :key="item.product.name"
          :item="item"
          @removeItem="removeItem"
          @decrementItem="decrementItem"
        ></CartItem>
       
    </div>
    <div v-else class="border border-slate-500 bg-slate-200 rounded-md w-1/2 h-64 flex items-center justify-center">
      <p>O carrinho está vazio.</p>
    </div>
    

    <div class="grid grid-cols-1 sm:grid-cols-2 flex justify-between bg-gray-300 gap-4">
      <section class="flex justify-between gap-4">
        <div v-for="product in products" :key="product.name" class="w-60 h-full">
          <ProductCard :product="product" @onClick="addItem(product)"></ProductCard>
        </div>
      </section>
    </div>
  </main>
</template>

<style></style>
