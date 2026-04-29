<template>
    <Card class="flex flex-col justify-between" :style='{ width: "100%", height: "100%" }'>
        <template #header>
            <img src="https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc" alt="Product Image" 
            class="w-full object-cover">

        </template>
        <template #title>
            <h2> {{ product.name }} </h2>
        </template>
        <template #content>
        <p>Preço: {{ product.price.toFixed(2) }}</p>
        <p>{{ product.description }}</p>
        </template>
        <template #footer  >
            <div class="flex w-full h-full justify-center"> 
                <Button label="Adicionar" @click="addItem(product)" severity="principal" :outlined="true"/>
            </div>
        </template>
    </Card> 
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