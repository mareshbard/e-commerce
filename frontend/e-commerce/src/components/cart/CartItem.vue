<template>
    <div>
        <Card :style='{ width: "100%", minWidth: "220px", maxWidth: "370px" }'>
  
        <template #content>
            <div class= "flex flex-row gap-10 items-center">
                    <img src="https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc" alt="Product Image" 
            class="w-20">
                    <h3 class="gap-1"> {{ item.product.name }} </h3>
                    <p>Preço: {{ item.product.price.toFixed(2) }}</p>
                </div>
        </template>
        <template #footer>
            <div class="flex flex-row-reverse">
                <Button label="Deletar" @click="onRemoveItem(item.product)" severity="danger" :outlined="true"/> 
            </div>
        </template>
    </Card>
    </div>
    </template>

    <script lang="ts">
import { defineComponent, type PropType } from 'vue';
import {type CartItem } from '@/model/cart.model'
import {type Product } from '@/model/product.model'
export default defineComponent({
    props: {
        item: {
            type: Object as PropType<CartItem>,
                required: true
        }
    },
    emits: ['removeItem', 'decrementItem'],
    methods: {
        onDecrementItem(product: Product) {
            this.$emit('decrementItem', product) 
        },
        onRemoveItem(product: Product) {
            this.$emit('removeItem', product)
        }
    } 
})
</script>