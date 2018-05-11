import Vue from 'vue'

// CSS
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from '~/store'

import '@/elementUI' // 按需加载elementUI
import '@/icons' // icon

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
