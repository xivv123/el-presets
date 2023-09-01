import elPresetsForm from './src/index.vue'

const elPresetsFormInstall = {
  install(Vue:any) {
    Vue.component('elPresets-form', elPresetsForm)
  }
}

export default elPresetsFormInstall
export { elPresetsForm }