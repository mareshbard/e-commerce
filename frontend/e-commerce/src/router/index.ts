import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Products from '@/views/products.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [ {
    path: '/',
    component: Home
  },
  {
    path: 'products',
    component: Products
  } 
],
})

export default router
