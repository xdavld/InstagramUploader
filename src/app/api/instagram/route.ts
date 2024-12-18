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
    const { imageUrl, videoUrl, caption, mediaType } =
      (await req.json()) as InstagramRequestBody

    if ((!imageUrl && !videoUrl) || !caption) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const isVideo = !!videoUrl

    console.log("Incoming Request:", { imageUrl, videoUrl, caption, mediaType })

    // Step 1: Upload the media
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
    console.log("Upload Response:", uploadData)

    if (!uploadResponse.ok) {
      console.error("Upload Failed:", uploadData)
      return NextResponse.json(
        { error: uploadData },
        { status: uploadResponse.status }
      )
    }

    // Step 2: Poll for media status until it's ready
    const creationId = uploadData.id
    const statusUrl = `https://graph.facebook.com/v21.0/${creationId}?fields=status&access_token=${env.INSTAGRAM_ACCESS_TOKEN}`
    let mediaReady = false
    const maxAttempts = 10
    let attempts = 0

    while (!mediaReady && attempts < maxAttempts) {
      const statusResponse = await fetch(statusUrl, {
        method: "GET",
        headers: { Authorization: `Bearer ${env.INSTAGRAM_ACCESS_TOKEN}` },
      })

      const statusData = await statusResponse.json()
      console.log(`Status Response [Attempt ${attempts + 1}]:`, statusData)

      if (statusData.status?.startsWith("Finished")) {
        mediaReady = true
      } else {
        attempts++
        await new Promise((resolve) => setTimeout(resolve, 10000)) // Wait for 2 seconds before retrying
      }
    }

    if (!mediaReady) {
      console.error("Media is not ready after multiple attempts.")
      return NextResponse.json(
        { error: "Media is not ready after multiple attempts" },
        { status: 408 }
      )
    }

    // Step 3: Publish the media
    const publishUrl = `https://graph.facebook.com/v21.0/17841427525169570/media_publish`
    const publishQuery = `?creation_id=${creationId}&access_token=${env.INSTAGRAM_ACCESS_TOKEN}`

    console.log(`Publish Request URL: ${publishUrl}${publishQuery}`)

    const publishResponse = await fetch(`${publishUrl}${publishQuery}`, {
      method: "POST", // Use POST without a body
    })

    const publishData = await publishResponse.json()
    console.log("Publish Response:", publishData)

    if (!publishResponse.ok) {
      console.error("Publish Failed:", publishData)
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
