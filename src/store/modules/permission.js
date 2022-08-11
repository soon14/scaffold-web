import {constantRouterMap} from '@/router/routers'
import Layout from '@/layout/index'

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        }
    },
    actions: {
        GenerateRoutes({commit}, asyncRouter) {
            commit('SET_ROUTERS', asyncRouter)
        }
    }
}
