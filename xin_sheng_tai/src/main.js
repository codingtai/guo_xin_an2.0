import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//初始化样式
import '@/assets/styles/bass.css'
import 'font-awesome/css/font-awesome.min.css'

import myElement from '@/components/liarbry'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(router).use(ElementPlus).use(myElement).mount('#app')
