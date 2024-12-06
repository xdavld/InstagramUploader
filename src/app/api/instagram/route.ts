import { NextRequest, NextResponse } from "next/server"
import { env } from "@/env"

// Define request body type
type InstagramRequestBody = {
  imageUrl?: string
  videoUrl?: string
  caption: string
  mediaType?: "REELS"
}

// Define API response types
type UploadResponse = {
  id: string
}

type PublishResponse = {
  id: string
}

export async function POST(req: NextRequest) {
  try {
    // Parse and type the request body
    const { imageUrl, videoUrl, caption, mediaType } =
      (await req.json()) as InstagramRequestBody

    // Ensure required fields are present
    if ((!imageUrl && !videoUrl) || !caption) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const isVideo = !!videoUrl

    // Step 1: Upload the media and get the creation_id
    const uploadResponse = await fetch(
      `https://graph.facebook.com/v21.0/17841427525169570/media`,
      {
        method: "POST",
        body: JSON.stringify({
          ...(isVideo
            ? { video_url: videoUrl, media_type: mediaType || "REELS" }
            : { image_url: imageUrl }),
          caption: caption,
          access_token: env.INSTAGRAM_ACCESS_TOKEN,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )

    const uploadData = (await uploadResponse.json()) as UploadResponse

    if (!uploadResponse.ok) {
      return NextResponse.json(
        { error: uploadData },
        { status: uploadResponse.status }
      )
    }

    // Step 2: Publish the media using the creation_id
    const publishResponse = await fetch(
      `https://graph.facebook.com/v21.0/17841427525169570/media_publish`,
      {
        method: "POST",
        body: JSON.stringify({
          creation_id: uploadData.id,
          access_token: env.INSTAGRAM_ACCESS_TOKEN,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )

    const publishData = (await publishResponse.json()) as PublishResponse

    if (!publishResponse.ok) {
      return NextResponse.json(
        { error: publishData },
        { status: publishResponse.status }
      )
    }

    return NextResponse.json(publishData, { status: 200 })
  } catch (error) {
    console.error("Error in Instagram API route:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}