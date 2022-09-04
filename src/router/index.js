import router from './routers'
import store from '@/store'
import i18n from '@/i18n'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条CSS
import { getToken } from '@/utils/auth' // 从Cookie中获取Token
import { buildMenus } from '@/api/system/menu' // 后端获取菜单信息Api
import { filterAsyncRouter } from '@/store/modules/permission' // 菜单列表预处理

NProgress.configure({ showSpinner: false }) // NProgress 配置

const whiteList = ['/login', '/401'] // 没有重定向白名单

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // 标签页
  if (to.meta.title) {
    document.title = to.meta.title + ' - ' + String(i18n.t('global.title'))
  } else {
    document.title = String(i18n.t('global.title'))
  }
  // 进度条初始状态
  NProgress.start()
  // 根据Token判断是否登录
  if (getToken()) {
    // 已登录且要跳转的页面是登录页
    if (to.path === '/login') {
      // 重定向到首页
      next({ path: '/' })
      NProgress.done()
    } else {
      // 判断当前用户是否已拉取完user_info信息
      if (store.getters.roles.length === 0) {
        store.dispatch('user/GetInfo').then(res => { // 拉取用户信息
          // 动态路由,拉取菜单
          loadMenus(next, to)
        }).catch((err) => {
          store.dispatch('user/LogOut').then(() => {
            // window.location.reload() // 为了重新实例化vue-router对象 避免bug
            // router.push({path: '/401'})
          })
        })
      } else if (store.getters.loadMenus) { // 登录时未拉取 菜单，在此处拉取
        // 修改为false，防止死循环请求
        store.dispatch('user/UpdateLoadMenus').then(res => {
        })
        // 拉取菜单
        loadMenus(next, to)
      } else {
        next()
      }
    }
  } else {
    // 不存在Token
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单,直接进入
      next()
    } else { // 否则全部重定向到登录页
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

export const loadMenus = (next, to) => {
  buildMenus().then(res => {
    const asyncRouter = filterAsyncRouter(res.data)// 注意将data传入
    asyncRouter.push({ path: '*', redirect: '/404', hidden: true })
    // 存储路由(Vuex)
    store.dispatch('permission/GenerateRoutes', asyncRouter).then(() => {
      router.addRoutes(asyncRouter)// 动态添加可访问的路由表
      next({ ...to, replace: true })// 跳转
    })
  })
}

router.afterEach(() => {
  NProgress.done()// 进度条在跳转完之后结束
})
