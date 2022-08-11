import {getToken, removeToken, setToken} from "@/utils/auth";
import {getUserInfo, login, logout} from "@/api/login";

const user = {
    states: {
        token: getToken(),
        user: {},
        permissions: [],
        // 第一次加载菜单时用到
        loadMenus: false
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USER: (state, user) => {
            state.user = user
        },
        SET_PERMISSIONS: (state, permissions) => {
            state.permissions = permissions
        },
        SET_LOAD_MENUS: (state, loadMenus) => {
            state.loadMenus = loadMenus
        }
    },

    actions: {
        //登录
        Login({commit}, userLoginInfo) {
            const rememberMe = userLoginInfo.rememberMe
            return new Promise((resolve, reject) => {
                login(userLoginInfo.username, userLoginInfo.password, userLoginInfo.code, userLoginInfo.uuid).then(res => {
                    setToken(res.data.token, rememberMe)
                    commit('SET_TOKEN', res.data.token)
                    //存用户信息
                    setUserInfo(res.data.userInfo, commit)
                    //拉取菜单
                    commit('SET_LOAD_MENUS', true)
                    resolve()
                }).catch(error => {
                    reject(error)
                });
            })
        },

        //获取用户信息
        GetInfo({commit}) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(res => {
                    setUserInfo(res.data.userInfo, commit)
                    resolve(res.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 注销
        LogOut({commit}) {
            return new Promise((resolve, reject) => {
                logout().then(res => {
                    logOut(commit)
                    resolve()
                }).catch(error => {
                    logOut(commit)
                    reject(error)
                })
            })
        },

        //
        UpdateLoadMenus({commit}) {
            return new Promise((resolve, reject) => {
                loadMenu(commit, false)
            })
        }
    }
}


// 系统注销
export const logOut = (commit) => {
    commit('SET_TOKEN', '')
    commit('SET_PERMISSIONS', [])
    removeToken()
}

// 设置Vuex的用户信息
export const setUserInfo = (res, commit) => {
    //如果没有任何权限，则赋予一个最低权限，避免请求死循环
    if (res.permissions.length === 0) {
        commit('SET_PERMISSIONS', ['staff'])
    } else {
        commit('SET_PERMISSIONS', res.permissions)
    }
    commit('SET_USER', res)
}

// 获取菜单
export const loadMenu = (commit, action) => {
    commit('SET_LOAD_MENUS', action)
}

export default user
