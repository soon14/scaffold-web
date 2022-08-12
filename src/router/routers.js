import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index'

Vue.use(Router)

// 将路由表暴露出去,方便Vuex
export const constantRouterMap = [
  {
    path: '/login',
    meta: {
      title: '登录',
      noCache: true
    },
    component: (resolve) => require(['@/views/Login'], resolve),
    hidden: true
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/features/404'], resolve),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: (resolve) => require(['@/views/features/redirect'], resolve)
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: (resolve) => require(['@/views/Home'], resolve),
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'iconfont iconfont-index',
          affix: true,
          noCache: true
        }
      }
    ]
  }
]

export default new Router({
  // 使用history模式 (浏览器输入框没有#)
  mode: 'history',
  // 记住网页滚动条行为,y从0开始
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
