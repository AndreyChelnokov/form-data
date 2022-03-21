import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personalData: {
      name: '',
      age: '',
      childrens: [
        {
          id: 1,
          name: '',
          age: '',
        }
      ]
    }
  },
  mutations: {
    SET_NEW_DATA: function (state, value) {
      state.personalData = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
