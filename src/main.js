import './assets/styles/main.css'
import { createPinia } from 'pinia'
import router from './core/router'
import {app} from '@/core/services/app.service';
import "@/core/plugins/plugin-service-provider";
app.use(createPinia())
app.use(router)
app.mount('#app')
