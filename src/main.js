import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap/dist/js/bootstrap.min.js')

createApp(App).use(router).mount('#app')
