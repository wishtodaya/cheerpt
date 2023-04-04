<template>
  <div class="message" :class="message.type">
    <span>{{ message.text }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* 样式保持不变 */
</style>
