import globalSettings from '@/global'
import variables from '@/assets/styles/element-variables.scss'
import i18n from '@/i18n'

const { showFooter, footerTxt, tagsView, fixedHeader, sidebarLogo, uniqueOpened } = globalSettings

const state = {
  // 主题
  theme: variables.theme,
  // 是否打开右边系统布局设置
  showSettings: false,
  // 是否显示设置的底部信息
  showFooter: showFooter,
  // 底部文字，支持html语法
  footerTxt: footerTxt,
  // 备案号
  caseNumber: String(i18n.t('global.caseNumber')),
  // 是否显示 tagsView
  tagsView: tagsView,
  // 是否固定头部
  fixedHeader: fixedHeader,
  // 是否显示logo
  sidebarLogo: sidebarLogo,
  // 是否只保持一个子菜单的展开
  uniqueOpened: uniqueOpened
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
