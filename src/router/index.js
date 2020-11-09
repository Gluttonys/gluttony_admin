import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import layout from '@/layout'

Vue.use(VueRouter)

const subChild = [
  {
    path: 'profile',
    component: () => import('@/views/user/profile/profile'),
    name: 'profile',
    meta: {title: '个人中心'}
  },
  {
    path: 'dashboard',
    component: () => import('@/views/dashboard/dashboard'),
    name: 'dashboard',
    meta: {title: '仪表盘'}
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('@/views/guide/guide'),
    meta: {title: '引导'}
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('@/views/document/document'),
    meta: {title: '文档'}
  },
  {
    path: '/tinymce',
    name: 'tinymce',
    component: () => import('@/views/componentsDemo/richTextForTinyMce/richTextForTinyMce'),
    meta: {title: 'tinymce'}
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/map/baiduMap'),
    meta: {title: '地图'}
  },
  {
    path: '/charts-01',
    name: 'charts01',
    component: () => import('@/views/charts/charts01/chartsOne'),
    meta: {title: 'charts01'}
  },
  {
    path: '/charts-02',
    name: 'charts02',
    component: () => import('@/views/charts/charts02/chartsTwo'),
    meta: {title: 'charts02'}
  },
  {
    path: '/error-404',
    name: 'error404',
    component: () => import('@/views/errorPage/errPage44'),
    meta: {title: "error404"}
  },
  {
    path: '/error-500',
    name: 'error500',
    component: () => import('@/views/errorPage/errPage45'),
    meta: {title: "error500"}
  },
  {
    path: '/markdown',
    name: 'markdown',
    component: () => import('@/views/markdown/markdown'),
    meta: {title: "markdown"}
  },
  {
    path: '/workflow',
    name: 'workflow',
    component: () => import('@/views/workflow/workflow'),
    meta: {title: '工作流'}
  }
]

const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: subChild
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login/login'),
    meta: {title: 'login'}
  },
  {
    // 会匹配所有路径, 跳到 404
    // 该路由应该放到路由表的最后一项， 作为最后跳转项
    path: '*',
    component: () => import('@/views/errorPage/errPage44'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 必须调用 `next` */
  store.commit('global/toAddTagList', [to.meta.title, to.name])  /* 二维数组保存tag + 路由 */
  store.commit('global/toSetCurrentTag', to.meta.title)                 /* 设置当前标签 */
  next()
})

router.beforeResolve((to, from, next) => {
  /* 必须调用 `next` */
  next()
})


export default router
