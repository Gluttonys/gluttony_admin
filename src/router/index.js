import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '@/layout'

Vue.use(VueRouter)

const subChild = [
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
  {
    path: '/guide',
    name: 'guide',
    component: () => import('@/views/guide/guide')
  }
]

const routes = [
  {
    path: '/',
    component: layout,
    redirect:'/dashboard',
    children: subChild
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login/login')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
