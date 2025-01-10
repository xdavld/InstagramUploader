import OpenAI from 'openai';


const client = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function getChatCompletion(message: string) {
  try {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-4',
    });
    return chatCompletion.choices[0]?.message?.content;
  } catch (error) {
    console.error('Error fetching chat completion:', error);
    throw error;
  }
}