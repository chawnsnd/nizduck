import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main/Main'
import LakeMain from '@/components/lake/LakeMain'
import Lake from '@/components/lake/Lake'
import Board from '@/components/lake/board/Board'
import BoardDetail from '@/components/lake/board/BoardDetail'
import BoardPost from '@/components/lake/board/BoardPost'
import BoardModify from '@/components/lake/board/BoardModify'
import SNS from '@/components/lake/sns/SNS'
import Calendar from '@/components/lake/calendar/Calendar'
import Live from '@/components/Live'
import Nest from '@/components/Nest'
import Login from '@/components/Login'
import Join from '@/components/Join'

Vue.use(Router)

const routes = [
  { path: '/', component: Main },
  { path: '/lake', component: LakeMain },
  { path: '/lake/:artist',
    component: Lake,
    children: [{
      path: 'board',
      component: Board
    }, {
      path: 'board/post',
      component: BoardPost
    }, {
      path: 'board/:bno',
      component: BoardDetail
    }, {
      path: 'board/:bno/modify',
      component: BoardModify
    }, {
      path: 'sns',
      component: SNS
    }, {
      path: 'calendar',
      component: Calendar
    }]
  },
  { path: '/live', component: Live },
  { path: '/nest', component: Nest },
  { path: '/login', component: Login },
  { path: '/join', component: Join }
]

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) return {selector: to.hash}
    else return { x: 0, y: 0 }
  }
})
