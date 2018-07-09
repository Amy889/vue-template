import vue from 'vue'
import router from './router/index.js'
import App from './App.vue'
import '../styles/common/reset.scss'

vue.config.productionTip = false

new vue ({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})