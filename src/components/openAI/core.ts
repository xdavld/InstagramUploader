import OpenAI from 'openai';
import { env } from "@/env"

// Lade Umgebungsvariablen



const openAiApiKey = env.OPENAI_API_KEY;
console.log('OpenAI API Key:', openAiApiKey);


const openai = new OpenAI({
  apiKey: openAiApiKey,
  dangerouslyAllowBrowser: true,
});

export async function getSuggestion(imageUrl: string): Promise<string> {
  console.log(imageUrl)
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "Generate only Hastags for this image. Just retrun the hastags and nothing else. Make them funny and a bit random. Make sure they are short. Add maximum 3." },
        {
          type: "image_url",
          image_url: {
            "url": imageUrl,
          },
        },
      ],
    },
  ],
    });

    // Extract the relevant text from the response
    const hashtags = response.choices[0]?.message?.content?.trim();

    if (!hashtags) {
      throw new Error("No hashtags generated in the response.");
    }

    return hashtags; // Return the string containing the hashtags
  } catch (error) {
    console.error("Error fetching chat completion with image:", error);
    throw error;
  }
}