import Vue from 'vue'
import Router from "vue-router";
import Layout from "@/layout";
import {resolve} from "path";

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
