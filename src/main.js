// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Header from './components/Header'
import Card from './components/Card'

Vue.config.productionTip = false

Vue.component('header', Header)
Vue.component('card', Card)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
