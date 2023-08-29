// import Vue from 'vue'
import elPresetsForm from './src/index.vue'

const elPresetsFormInstall = {
  install(Vue:any) {
    Vue.component('elPresets-form', elPresetsForm)
  }
}

// Vue.use(elPresetsFormInstall)

export default elPresetsFormInstall
export { elPresetsForm }