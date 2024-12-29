<!-- src/components/LoadingSpinner.vue -->
<template>
  <div v-if="loading" class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ loading: boolean }>()
</script>

<style scoped>
.spinner-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.spinner {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
