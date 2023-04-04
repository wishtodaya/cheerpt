<template>
  <form class="input-form" @submit.prevent="submitMessage">
    <input type="text" v-model="message" placeholder="请输入您的问题..." />
    <button type="submit">发送</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");

const emit = defineEmits(["submit"]);

function submitMessage() {
  if (message.value.trim()) {
    emit("submit", message.value);
    message.value = "";
  }
}
</script>

<style scoped>
/* 样式保持不变 */
</style>
