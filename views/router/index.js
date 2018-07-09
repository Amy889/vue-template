import vue from 'vue'
import router from 'vue-router'
import index from '../index/index.vue'

vue.use(router)

export default new router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    }
  ]
})
