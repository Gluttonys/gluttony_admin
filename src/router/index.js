import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'profile',
        component:() => import('@/views/user/profile/profile'),
        name: 'profile',
        meta: {title: '个人中心'}
      },
      {
        path: 'dashboard',
        component:() => import('@/views/dashboard/dashboard'),
        name: 'dashboard',
        meta: {title: '仪表盘'}
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
