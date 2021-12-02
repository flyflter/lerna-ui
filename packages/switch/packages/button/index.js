import button from './switch.vue'
button.install = function (Vue) {
  Vue.component(button.name, button)
}
export default button