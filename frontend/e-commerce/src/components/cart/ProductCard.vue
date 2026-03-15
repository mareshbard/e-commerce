<template>
<article style="border: 5px solid purple; border-radius: 10px; padding: 20px; margin: 10px;">
      <h1>{{ product.name }}</h1>
      <p>Preço: {{ product.price.toFixed(2) }}</p>
      <p>{{ product.description }}</p>
      <button @click="addItem(product)">Adicionar</button>
    </article>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { Product } from "@/model/product.model"
    export default defineComponent({
        props: {
            product: {
                type: Object as PropType<Product>,
                default: new Product("Um gato entre os pombos", 38.80, "Livro", 0.1)
            }
        },
        emits: ['onClick'],
        methods: {
            addItem(product: Product){
                this.$emit('onClick', product)
            }
        }
    })
</script>