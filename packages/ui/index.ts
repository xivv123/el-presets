
import { elPresetsForm } from '@el-presets/components/form'
import { elPresetsAsyncButton } from '@el-presets/components/button'
import { elPresetsCtrl } from '@el-presets/components/ctrl'

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
export { elPresetsForm, elPresetsAsyncButton, elPresetsCtrl }
