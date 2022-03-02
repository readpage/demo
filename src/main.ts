import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia"
import plugins from './plugins'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/index.css"


createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementPlus)
  .use(plugins)
  .mount('#app')
