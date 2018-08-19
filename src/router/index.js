import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main/Main'
import LakeList from '@/components/lake/LakeList'
import Lake from '@/components/lake/Lake'
import Artist from '@/components/lake/artist/Artist'
import Board from '@/components/lake/board/Board'
import BoardDetail from '@/components/lake/board/BoardDetail'
import BoardPost from '@/components/lake/board/BoardPost'
import BoardModify from '@/components/lake/board/BoardModify'
import SNS from '@/components/lake/sns/SNS'
import Calendar from '@/components/lake/calendar/Calendar'
import DetailCalendar from '@/components/lake/calendar/DetailCalendar'
import Live from '@/components/Live'
import Nest from '@/components/nest/Nest'
import Login from '@/components/Login'
import Join from '@/components/Join'

import ArtistManagement from '@/components/Artist'

import Layout from '@/components/layout/Layout'

Vue.use(Router)

const routes = [
  { path: '/',
    component: Layout,
    children: [
      { path: '', component: Main },
      { path: 'lake', component: LakeList },
      { path: 'lake/:artist',
        component: Lake,
        children: [{
          path: '',
          component: Artist
        }, {
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
      { path: '/nest/', component: Nest },
      { path: '/nest/:duck', component: Nest }
    ]
  },
  { path: '/login', component: Login },
  { path: '/join', component: Join },
  { path: '/calendar/:artist/:date', component: DetailCalendar },
  { path: '/artist', component: ArtistManagement }
]

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) return {selector: to.hash}
    else return { x: 0, y: 0 }
  }
})
