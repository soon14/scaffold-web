import Cookies from 'js-cookie'

// 适配移动端
const state = {
  sidebar: {
    // 菜单栏是否默认打开(从Cookies中拿,没有则默认打开)
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    // 默认没有动画效果
    withoutAnimation: false
  },
  // 默认是桌面版
  device: 'desktop',
  size: Cookies.get('size') || 'small'
}

const mutations = {

  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },

  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },

  OPEN_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 1)
    state.sidebar.opened = true
    state.sidebar.withoutAnimation = withoutAnimation
  },

  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },

  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  }
}

const actions = {
  // 切换菜单栏状态
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  // 关闭菜单栏
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  openSideBar({ commit }, { withoutAnimation }) {
    commit('OPEN_SIDEBAR', withoutAnimation)
  },
  // 切换设备(移动端)
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  // 设置设备的大小
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
