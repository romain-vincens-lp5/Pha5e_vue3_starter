import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'


import './assets/plugins/gsap.client.js'
import './assets/plugins/lenis.client.js'
import './scss/reset.scss'
import './scss/main.scss'

createApp(App).use(router).mount('#app')
