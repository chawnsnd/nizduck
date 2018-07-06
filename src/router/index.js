import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Lake from '@/components/Lake'
import LakeDetail from '@/components/LakeDetail'
import Live from '@/components/Live'
import Nest from '@/components/Nest'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '/lake', name: 'Lake', component: Lake },
  { path: '/lake/detail', name: 'LakeDetail', component: LakeDetail },
  { path: '/live', name: 'Live', component: Live },
  { path: '/nest', name: 'Nest', component: Nest }
]

export default new Router({
  mode: 'history',
  routes
})
