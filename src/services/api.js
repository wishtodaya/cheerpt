// api.js
import {OpenAIApi} from "openai";

const openai = new OpenAIApi();
const OPENAI_API_KEY="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"
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${OPENAI_API_KEY}`,
};

async function getChatCompletion(messages) {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    },{
      headers:headers
    }
    );
    return completion.data.choices[0].message;
  } catch (error) {
    console.error("Error fetching chat completion:", error);
    throw error;
  }
}

export {
  getChatCompletion,
};
