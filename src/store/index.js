import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse( localStorage.getItem('tasks') || '[]' )
  },
  mutations: {
    CreateNewTask(state, task) {
      state.tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    CreateNewTask({commit}, task) {
      commit('CreateNewTask', task)
    }
  },
  getters: {
    tasks: s => s.tasks
  }
})
