;
// src/mocks/handlers.ts

import { rest } from "msw";





export const handlers = [
  rest.post("/api/instagram", async (req, res, ctx) => {
    const { imageUrl, videoUrl, caption, mediaType } = await req.json()

    console.log("MSW Handler received:", {
      imageUrl,
      videoUrl,
      caption,
      mediaType,
    })

    // Basic validation
    if ((!imageUrl && !videoUrl) || !caption) {
      return res(
        ctx.status(400),
        ctx.json({ error: "Missing required fields" })
      )
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000)) // 1 second delay

    // Simulate successful response
    return res(
      ctx.status(200),
      ctx.json({ message: "File published successfully!" })
    )
  }),
]