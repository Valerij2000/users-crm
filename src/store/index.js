import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Импортируем модуль

import users from './users'


export default new Vuex.Store({

  modules: {
    users
  },

  state: {
  },
  mutations: {
  },

  actions: {
  },
 
})
