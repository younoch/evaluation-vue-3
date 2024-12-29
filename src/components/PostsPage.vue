<!-- src/components/PostsPage.vue -->
<template>
    <div>
      <h1>Posts</h1>
      <loading-spinner :loading="isLoading"></loading-spinner>
      <error-component :error="errorMessage" @clear-error="clearError"></error-component>
      <ul>
        <li v-for="post in allPosts" :key="post.id">
          <h2>
            <router-link :to="{ name: 'PostDetailPage', params: { id: post.id } }">
              {{ post.title }}
            </router-link>
          </h2>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  import LoadingSpinner from '@/components/LoadingSpinner.vue'
  import ErrorComponent from '@/components/ErrorComponent.vue'
  
  export default {
    components: {
      LoadingSpinner,
      ErrorComponent
    },
    computed: {
      ...mapGetters('posts', ['allPosts', 'isLoading', 'errorMessage'])
    },
    created() {
      this.fetchPosts()
    },
    methods: {
      ...mapActions('posts', ['fetchPosts']),
      clearError() {
        this.$store.commit('posts/setError', '')
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  