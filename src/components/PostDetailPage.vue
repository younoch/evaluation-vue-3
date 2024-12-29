<!-- src/components/PostDetailPage.vue -->
<template>
  <div>
    <h1>Post Details</h1>
    <p>ID: {{ id }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>

<style scoped>
/* Add your styles here */
</style>
