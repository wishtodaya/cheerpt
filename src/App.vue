<template>
  <div id="app">
    <div class="chat-container">
      <ChatMessage v-for="(message, index) in messages" :key="index" :message="message" />
    </div>
    <ChatInput @send="handleSendMessage" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ChatMessage from "./components/ChatMessage.vue";
import ChatInput from "./components/ChatInput.vue";
import { getChatCompletion } from "./services/api.js";

const messages = ref([]);

onMounted(() => {
  messages.value.push({ role: "system", content: "You are a helpful assistant." });
});

async function handleSendMessage(inputMessage) {
  messages.value.push({ role: "user", content: inputMessage });

  try {
    const chatbotResponse = await getChatCompletion(messages.value);
    messages.value.push({ role: "assistant", content: chatbotResponse.content });
  } catch (error) {
    console.error("Error:", error);
  }
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
