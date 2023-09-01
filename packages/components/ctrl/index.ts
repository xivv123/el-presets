import elPresetsCtrl from './src/index.vue'

const elPresetsCtrlInstall = {
  install(Vue:any) {
    Vue.component('elPresets-ctrl', elPresetsCtrl)
  }
}

export default elPresetsCtrlInstall
export { elPresetsCtrl }