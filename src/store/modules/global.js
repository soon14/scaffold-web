import globalSettings from '@/global';
import variables from '@/assets/style/element-variables.scss'

const {showFooter, footerTxt, caseNumber, tagsView, fixedHeader, sidebarLogo, uniqueOpened} = globalSettings

const state = {
    theme: variables.theme,//主题
    showSettings: false,//是否打开右边系统布局设置
    showFooter: showFooter,//是否显示设置的底部信息
    footerTxt: footerTxt, //底部文字，支持html语法
    caseNumber: caseNumber, //备案号
    tagsView: tagsView, //是否显示 tagsView
    fixedHeader: fixedHeader,//是否固定头部
    sidebarLogo: sidebarLogo,//是否显示logo
    uniqueOpened: uniqueOpened//是否只保持一个子菜单的展开
}

const mutations = {
    CHANGE_SETTING: (state, {key, value}) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    }
}

const actions = {
    changeSetting({commit}, data) {
        commit('CHANGE_SETTING', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
