const state = {
  loggingAutoBottom: false,
}

const mutations = {
  // 放入Vuex中
  SET_LOG_AUTO_BOTTOM: (state, value) => {
    state.loggingAutoBottom = value
  }
}

const actions = {
  OpenAutoBottom({commit}) {
    commit('SET_LOG_AUTO_BOTTOM', true)
  },
  CloseAutoBottom({commit}) {
    commit('SET_LOG_AUTO_BOTTOM', false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
