// src/store/modules/counter/index.ts
import { Module } from 'vuex'

interface CounterState {
  count: number
}

const state: CounterState = {
  count: 0
}

const getters = {
  doubleCount: (state: CounterState) => state.count * 2
}

const actions = {
  incrementAsync({ commit }: any) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}

const mutations = {
  increment(state: CounterState) {
    state.count++
  }
}

const counterModule: Module<CounterState, any> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default counterModule
