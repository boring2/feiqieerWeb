// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { DatePicker } from 'element-ui'
// import 'element-ui/lib/theme-default/base.css'
// import 'element-ui/lib/theme-default/date-picker.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(DatePicker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
