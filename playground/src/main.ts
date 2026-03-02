import { BraipUI } from '@braiphub/ui'
import '@braiphub/ui/styles/main.scss'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(BraipUI, {
  theme: 'light',
})

app.mount('#app')
