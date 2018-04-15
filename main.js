import index from './index.vue'

const install = (Vue) => {
  Vue.mixin({
    components: {
      vueWindowModal: index
    }
  })
}

export default { install }
