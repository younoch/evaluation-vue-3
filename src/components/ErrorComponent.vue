<!-- src/components/ErrorComponent.vue -->
<template>
  <div v-if="error" class="error">
    <p>{{ error }}</p>
    <button @click="clearError">Clear Error</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: string }>()
const emit = defineEmits<{ (e: 'clear-error'): void }>()

function clearError() {
  emit('clear-error')
}
</script>

<style scoped>
.error {
  color: red;
  border: 1px solid red;
  padding: 10px;
  margin: 10px 0;
}
</style>
