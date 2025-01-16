import { NextRequest, NextResponse } from "next/server"
import { parse } from "cookie"

export async function POST(req) {
  try {
    const { imageUrl, videoUrl, caption, isStory, selectedTab, scheduledTime } =
      await req.json()

    // Validation for required fields
    if ((!imageUrl && !videoUrl) || !caption) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const cookieHeader = req.headers.get("cookie") || ""
    const cookies = parse(cookieHeader)

    const accessToken = cookies.instagram_access_token
    const userId = cookies.instagram_user_id

    if (!accessToken || !userId) {
      return NextResponse.json(
        { error: "Authentication token or user ID missing" },
        { status: 401 }
      )
    }

    // If user wants to schedule a post, just save it in DB and return.
    if (selectedTab === "schedule") {
      const postData = {
        media_url: imageUrl || videoUrl,
        media_type: imageUrl ? "image" : "video",
        caption,
        user_id: userId,
        access_token: accessToken,
        upload_at: scheduledTime, // When to actually post
        is_story: isStory ? "true" : "false",
      }

      // Save the scheduled post to the DB (via your existing /api/posts route)
      const supabaseResponse = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}api/posts`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        }
      )

      if (!supabaseResponse.ok) {
        const supabaseError = await supabaseResponse.json()
        console.error("Failed to save data to Supabase:", supabaseError)
        return NextResponse.json(
          { error: "Failed to save scheduled post data" },
          { status: 500 }
        )
      }

      const savedData = await supabaseResponse.json()

      // Return a simple JSON response
      return NextResponse.json(
        { message: "Post scheduled successfully", savedData },
        { status: 200 }
      )
    }

    // Otherwise (if user is posting right now), run the actual upload/publish steps:
    let payload = {
      caption,
      access_token: accessToken,
    }

    if (videoUrl) {
      payload.video_url = videoUrl
      payload.media_type = isStory ? "STORIES" : "REELS"
    } else if (imageUrl) {
      payload.image_url = imageUrl
      if (isStory) {
        payload.media_type = "STORIES"
      }
    }

    // 1. Upload media
    const uploadResponse = await fetch(
      `https://graph.instagram.com/v21.0/${userId}/media`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    )
    if (!uploadResponse.ok) {
      const errorData = await uploadResponse.json()
      console.error("Upload failed:", errorData)
      return NextResponse.json(
        { error: "Upload failed", details: errorData },
        { status: 500 }
      )
    }

    const uploadData = await uploadResponse.json()
    const creationId = uploadData.id

    // 2. Wait for media to be ready
    const statusUrl = `https://graph.instagram.com/v21.0/${creationId}?fields=status&access_token=${accessToken}`
    let mediaReady = false
    const maxAttempts = 10
    let attempts = 0

    while (!mediaReady && attempts < maxAttempts) {
      const statusResponse = await fetch(statusUrl)
      if (!statusResponse.ok) throw new Error("Failed to get status")

      const statusData = await statusResponse.json()
      console.log("Media status:", statusData)
      if (statusData.status?.startsWith("FINISHED")) {
        mediaReady = true
      } else {
        attempts++
        await new Promise((resolve) => setTimeout(resolve, 10000)) // 10s
      }
    }

    if (!mediaReady) {
      return NextResponse.json(
        { error: "Media is not ready after multiple attempts" },
        { status: 408 }
      )
    }

    // 3. Publish the media
    const publishResponse = await fetch(
      `https://graph.instagram.com/v21.0/${userId}/media_publish?creation_id=${creationId}&access_token=${accessToken}`,
      { method: "POST" }
    )
    if (!publishResponse.ok) {
      const publishData = await publishResponse.json()
      console.error("Publish failed:", publishData)
      return NextResponse.json(
        { error: "Publish failed", details: publishData },
        { status: 500 }
      )
    }

    const publishData = await publishResponse.json()
    return NextResponse.json(publishData, { status: 200 })
  } catch (error) {
    console.error("Internal server error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    )
  }
}
