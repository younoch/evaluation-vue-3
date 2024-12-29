// src/store/modules/posts/index.ts
import api from '../../../api'
import { Module } from 'vuex'

interface Post {
  id: number
  title: string
  body: string
}

interface PostsState {
  posts: Post[]
  loading: boolean
  error: string
}

const state: PostsState = {
  posts: [],
  loading: false,
  error: ''
}

const getters = {
  allPosts: (state: PostsState) => state.posts,
  isLoading: (state: PostsState) => state.loading,
  errorMessage: (state: PostsState) => state.error
}

const actions = {
  async fetchPosts({ commit }: any) {
    commit('setLoading', true)
    try {
      const response = await api.getPosts()
      commit('setPosts', response.data)
    } catch (error: any) {
      commit('setError', error.message)
    } finally {
      commit('setLoading', false)
    }
  }
}

const mutations = {
  setPosts(state: PostsState, posts: Post[]) {
    state.posts = posts
  },
  setLoading(state: PostsState, loading: boolean) {
    state.loading = loading
  },
  setError(state: PostsState, error: string) {
    state.error = error
  }
}

const postsModule: Module<PostsState, any> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default postsModule
