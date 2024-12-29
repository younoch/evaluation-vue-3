<!-- src/components/LoginPage.vue -->
<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit" :disabled="loading">Login</button>
        <p v-if="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  
  const store = useStore()
  
  const email = ref('')
  const password = ref('')
  
  const loading = computed(() => store.state.auth.loading)
  const error = computed(() => store.state.auth.error)
  
  function handleLogin() {
    store.dispatch('auth/login', { email: email.value, password: password.value })
  }
  </script>
  