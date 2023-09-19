import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Paginate from "vuejs-paginate-next"
import router from './router'
import App from './App.vue'

import './assets/css/style.scss'

const pinia = createPinia()
const app = createApp(App)

app.component('Paginate', Paginate)

app.use(router).use(pinia)
app.mount('#app')