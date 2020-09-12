import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NewBoard from '@/views/NewBoard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/new',
      component: NewBoard
    }
  ]
})
