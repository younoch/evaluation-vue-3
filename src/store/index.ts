// src/store/index.ts
import { createStore } from 'vuex'
import posts from './posts'
import auth from './auth'
import counter from './counter'

const store = createStore({
  modules: {
    posts,
    auth,
    counter
  }
})

export default store
