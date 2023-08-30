import { createApp } from 'vue'
import App from './App.vue'
import elPresets from 'el-presets'
import "el-presets/dist/index.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(elPresets).use(ElementPlus).mount('#app')
