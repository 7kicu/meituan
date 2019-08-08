// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/style/iconfont.css'
import '@/assets/style/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
import 'lib-flexible'
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
