import { createApp } from 'vue'
import '@/assets/base/common.scss'
import  '@/assets/base/normalize.scss'
import router from '@/router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
