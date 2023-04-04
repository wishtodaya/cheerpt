<template>
  <div class="container">
    <div class="chat-container">
      <div class="messages">
        <ChatMessage v-for="(message, index) in messages" :key="index" :message="message" />
      </div>
      <ChatInput @submit="sendMessage" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChatInput from "./components/ChatInput.vue";
import ChatMessage from "./components/ChatMessage.vue";
import api from "./services/api";

const messages = ref([]);

async function sendMessage(text) {
  messages.value.push({ text, type: "user" });
  const response = await api.sendMessage(text);
  if (response) {
    messages.value.push({ text: response.output, type: "chatgpt" });
  }
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
