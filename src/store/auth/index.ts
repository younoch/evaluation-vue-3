// src/store/modules/auth/index.ts
import { Module } from 'vuex'

interface User {
  email: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string
}

const state: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: ''
}

const getters = {
  isAuthenticated: (state: AuthState) => state.isAuthenticated,
  authError: (state: AuthState) => state.error
}

const actions = {
  login({ commit }: any, credentials: { email: string; password: string }) {
    commit('setLoading', true)
    setTimeout(() => {
      if (credentials.email === 'admin@example.com' && credentials.password === 'admin') {
        commit('setUser', { email: 'admin@example.com' })
        commit('setIsAuthenticated', true)
        commit('setError', '')
      } else {
        commit('setError', 'Invalid email or password')
      }
      commit('setLoading', false)
    }, 1000)
  },
  logout({ commit }: any) {
    commit('setUser', null)
    commit('setIsAuthenticated', false)
  }
}

const mutations = {
  setUser(state: AuthState, user: User) {
    state.user = user
  },
  setIsAuthenticated(state: AuthState, isAuthenticated: boolean) {
    state.isAuthenticated = isAuthenticated
  },
  setLoading(state: AuthState, loading: boolean) {
    state.loading = loading
  },
  setError(state: AuthState, error: string) {
    state.error = error
  }
}

const authModule: Module<AuthState, any> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default authModule
