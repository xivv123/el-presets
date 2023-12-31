import DefaultTheme from 'vitepress/theme'
import biuKit from 'el-presets'
import 'el-presets/styles/button.scss'
// 插件的组件，主要是demo组件
import './styles/index.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import "uno.css"


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(biuKit)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
