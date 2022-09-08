import { getSelectList } from '@/api/system/email'

const state = {
  options: []
}

const mutations = {
  SET_OPTIONS: (state, options) => {
    state.options = options
  }
}

const actions = {
  GetOptions({ commit }) {
    return new Promise((resolve, reject) => {
      getSelectList().then(res => {
        commit('SET_OPTIONS', res.data)
        resolve()
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
