import { NextRequest, NextResponse } from "next/server";
import { parse } from 'cookie'; // Import the cookie parser





// Define request body type
/**
 * @typedef {Object} InstagramRequestBody
 * @property {string} [imageUrl]
 * @property {string} [videoUrl]
 * @property {string} caption
 * @property {"REELS"} [mediaType]
 */

// Define API response types
/**
 * @typedef {Object} UploadResponse
 * @property {string} id
 */

/**
 * @typedef {Object} PublishResponse
 * @property {string} id
 */

export async function POST(req) {
  try {
    const { imageUrl, videoUrl, caption, mediaType } = await req.json()

    if ((!imageUrl && !videoUrl) || !caption) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const isVideo = !!videoUrl

    console.log("Incoming Request:", { imageUrl, videoUrl, caption, mediaType })

    // Extract cookies from the request headers
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = parse(cookieHeader);

    const accessToken = cookies.instagram_access_token;
    const userId = cookies.instagram_user_id;

    if (!accessToken || !userId) {
      return NextResponse.json(
        { error: "Authentication token or user ID missing" },
        { status: 401 }
      );
    }

    console.log("Access Token:", accessToken)
    console.log("User ID:", userId)

    // Step 1: Upload the media
    const uploadResponse = await fetch(
      `https://graph.instagram.com/v21.0/${userId}/media`,
      {
        method: "POST",
        body: JSON.stringify({
          ...(isVideo
            ? { video_url: videoUrl, media_type: mediaType || "REELS" }
            : { image_url: imageUrl }),
          caption: caption,
          access_token: accessToken,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )

    const uploadData = await uploadResponse.json()
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
    const statusUrl = `https://graph.instagram.com/v21.0/${creationId}?fields=status&access_token=${accessToken}`
    let mediaReady = false
    const maxAttempts = 10
    let attempts = 0

    while (!mediaReady && attempts < maxAttempts) {
      const statusResponse = await fetch(statusUrl, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      })

      const statusData = await statusResponse.json()
      console.log(`Status Response [Attempt ${attempts + 1}]:`, statusData)

      if (statusData.status?.startsWith("FINISHED")) {
        mediaReady = true
      } else {
        attempts++
        await new Promise((resolve) => setTimeout(resolve, 10000)) // Wait for 10 seconds before retrying
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
    const publishUrl = `https://graph.instagram.com/v21.0/${userId}/media_publish`
    const publishQuery = `?creation_id=${creationId}&access_token=${accessToken}`

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