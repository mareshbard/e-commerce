import App from './App.vue'
import './assets/main.css'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { setPrimeVue } from './modules/primevue.modules'

const app = createApp(App)

app.use(createPinia())
app.use(router)
setPrimeVue(app)

app.mount('#app')
