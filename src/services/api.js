import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com/chatgpt', // 请将此 URL 替换为实际的 ChatGPT API URL
  timeout: 10000,
});

export default {
  async sendMessage(text) {
    try {
      const response = await api.post('/generate', { input: text });
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      return null;
    }
  },
};
