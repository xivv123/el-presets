
import { elPresetsForm } from '@el-presets/components/form'
import Components from './components'
// import { App } from 'vue'
import 'uno.css'
import './styles/index.scss'

const Installer = {
  install(app: any) {
    Components.forEach(c => app.use(c))
  }
}

export default Installer
export { elPresetsForm }
