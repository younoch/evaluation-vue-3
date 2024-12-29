<!-- src/components/HomePage.vue -->
<template>
    <div>
      <h1>Home</h1>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <button @click="increment">Increment</button>
      <button @click="incrementAsync">Increment Async</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  
  const store = useStore()
  
  const count = computed(() => store.state.counter.count)
  const doubleCount = computed(() => store.getters['counter/doubleCount'])
  
  function increment() {
    store.commit('counter/increment')
  }
  
  function incrementAsync() {
    store.dispatch('counter/incrementAsync')
  }
  </script>
  