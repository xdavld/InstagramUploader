import { NextRequest, NextResponse } from 'next/server';
import { env } from "@/env";
import OpenAI from 'openai';





// Lade Umgebungsvariablen
const openAiApiKey = env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: openAiApiKey,
  dangerouslyAllowBrowser: true,
});

// Funktion zum Abrufen der Hashtags
export async function getSuggestion(imageUrl: string): Promise<string> {
  console.log("Image URL received:", imageUrl);
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Generate an Instagram caption for this image with some matching hashtags. The caption should be engaging, witty, or emotional. Include 3 to 6 hashtags that are relevant, funny, and engaging.",
            },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
    })

    const hashtags = response.choices[0]?.message?.content?.trim();

    if (!hashtags) {
      throw new Error("No hashtags generated in the response.");
    }

    return hashtags;
  } catch (error) {
    console.error("Error fetching chat completion with image:", error);
    throw error;
  }
}

// API Route Handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.imageUrl) {
      return NextResponse.json(
        { error: "Missing 'imageUrl' in request body." },
        { status: 400 }
      );
    }

    const hashtags = await getSuggestion(body.imageUrl);
    return NextResponse.json({ hashtags });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate hashtags. Please check the input or try again later." },
      { status: 500 }
    );
  }
}