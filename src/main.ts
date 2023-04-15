import { createApp } from 'vue'

import './global.css'
import './assets/css/global.css'

import App from './App.vue'

import router from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')
