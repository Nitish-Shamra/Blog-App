const dotenv = require('dotenv')

dotenv.config();

async function generateGeminiResponse(prompt) {
  const { GoogleGenerativeAI } = await import('@google/generative-ai');

  const ai = new GoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

module.exports = generateGeminiResponse;