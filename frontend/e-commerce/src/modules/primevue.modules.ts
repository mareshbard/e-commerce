import type { App } from 'vue'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'
import { Card } from 'primevue'
import PrimeVue from 'primevue/config'

export function setPrimeVue(app: App): void {
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.component('Button', Button)
app.component('Card', Card)
}