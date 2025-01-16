import { NextRequest, NextResponse } from "next/server"
import { parse } from "cookie"

export async function POST(req: NextRequest) {
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

    let savedData

    // Handle scheduled posts
    if (selectedTab === "schedule") {
      const postData = {
        media_url: imageUrl || videoUrl,
        media_type: imageUrl ? "image" : "video",
        caption: caption,
        user_id: userId,
        access_token: accessToken,
        upload_at: scheduledTime,
        is_story: isStory ? "true" : "false",
        processed: false, // Add a processed flag
      }

      const supabaseResponse = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/posts`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        }
      )

      console.log(supabaseResponse)

      if (!supabaseResponse.ok) {
        const supabaseError = await supabaseResponse.json()
        console.error("Failed to save data to Supabase:", supabaseError)
        return NextResponse.json(
          { error: "Failed to save scheduled post data" },
          { status: 500 }
        )
      }

      savedData = await supabaseResponse.json()
      return NextResponse.json(
        { success: true, data: savedData },
        { status: 201 }
      )
    }

    // Handle immediate publishing (existing logic)
    // Prepare the payload dynamically based on input
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

    // Upload media
    const uploadResponse = await fetch(
      `https://graph.instagram.com/v21.0/${userId}/media`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
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

    // Publish the media
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
    console.log("Post published:", publishData)

    return NextResponse.json(
      { success: true, data: publishData },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Internal server error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    )
  }
}
