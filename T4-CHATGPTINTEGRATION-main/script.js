const OpenAI = require('openai-api');
const openai = new OpenAI('YOUR_OPENAI_API_KEY');

// Function to interact with ChatGPT
async function createChatGPTResponse(message) {
  try {
    const response = await openai.complete({
      engine: 'davinci',
      prompt: message,
      maxTokens: 150
    });
    
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error communicating with ChatGPT:', error);
    return 'Sorry, I encountered an error. Please try again later.';
  }
}

module.exports = { createChatGPTResponse };