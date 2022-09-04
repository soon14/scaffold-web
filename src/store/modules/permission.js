import {constantRouterMap} from '@/router/routers'
import Layout from '@/layout/index'

const state = {
  routers: constantRouterMap,
  addRouters: []
}

const mutations = {
  SET_ROUTERS: (state, routers) => {
    state.addRouters = routers
    state.routers = constantRouterMap.concat(routers)
  }
}

const actions = {
  GenerateRoutes({commit}, asyncRouter) {
    commit('SET_ROUTERS', asyncRouter)
  }
}

// 遍历后台传来的路由字符串，转换为组件对象
export const filterAsyncRouter = (routers) => {
  return routers.filter(router => {
    if (router.component) {
      if (router.component === 'Layout') { // Layout组件特殊处理
        router.component = Layout
      } else {
        const component = router.component
        router.component = loadView(component)
      }
    }
    // 递归处理子菜单
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children)
    }
    return true
  })
}

export const loadView = (view) => {
  // 路由懒加载
  return (resolve) => require([`@/views/${view}`], resolve)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

