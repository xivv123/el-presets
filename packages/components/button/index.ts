import elPresetsAsyncButton from './async-button/index.vue'

const elPresetsAsyncButtonInstall = {
  install(Vue:any) {
    Vue.component('elPresets-async-button', elPresetsAsyncButton)
  }
}

export default elPresetsAsyncButtonInstall
export { elPresetsAsyncButton }