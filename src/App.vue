<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/login" v-if="!isAuthenticated">Login</router-link>
      <button @click="logout" v-if="isAuthenticated">Logout</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['logout'])
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#app {
  text-align: center;
}

nav {
  background-color: #333;
  padding: 10px;
}

nav a, nav button {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
}

nav a:hover, nav button:hover {
  background-color: #575757;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  background-color: #575757;
  border-radius: 4px;
}

nav a:not(:last-child) {
  margin-right: 10px;
}

nav button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>
