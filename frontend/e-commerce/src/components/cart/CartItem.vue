<template>
    <div>
        <Card :style='{ width: "100%", minWidth: "220px", maxWidth: "240px" }'>
            
            <template #title>
                <h2> {{ item.product.name }} </h2>
        </template>
        <template #content>
        <p>Preço: {{ item.product.price.toFixed(2) }}</p>
        <p>{{ item.product.description }}</p>
        </template>
        <template #footer>
                  <Button label="Deletar" @click="onRemoveItem(item.product)" severity="principal" :outlined="true"/>
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