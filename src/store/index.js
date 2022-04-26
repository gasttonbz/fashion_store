import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin: true,
    showRegister: false
  },
  getters: {
    showLogin(state) {
      return state.showLogin
    },
    showRegister(state) {
      return state.showRegister
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
