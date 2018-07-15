// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Button from './components/Button'

Vue.config.productionTip = false

Vue.component('main-header', Header)
Vue.component('main-footer', Footer)
Vue.component('btn', Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
