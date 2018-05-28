// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import {fetch,post} from './assets/baseJs/http.js'
Vue.config.productionTip = false
Vue.prototype.$fetch=fetch
Vue.prototype.$post=post
Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
