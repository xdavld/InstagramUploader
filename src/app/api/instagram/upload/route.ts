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

    let savedData 

    // Handle scheduled posts
    if (selectedTab === "schedule") {

      const postData = {
        media_url: imageUrl ? imageUrl : videoUrl,
        media_type: imageUrl ? "image" : "video",
        caption: caption,
        user_id: userId,
        access_token: accessToken,
        upload_at: scheduledTime,
        is_story: isStory ? "true" : "false",
      };
      
      const supabaseResponse = await fetch("https://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })

      console.log(supabaseResponse)

      if (!supabaseResponse.ok) {
        const supabaseError = await supabaseResponse.json();
        console.error("Failed to save data to Supabase:", supabaseError);
        return NextResponse.json(
          { error: "Failed to save scheduled post data" },
          { status: 500 }
        );
      }

      savedData = await supabaseResponse.json();

      const now = new Date()
      const delay = new Date(scheduledTime).getTime() - now.getTime()
      await new Promise((resolve) => setTimeout(resolve, delay))
    }

    // Prepare the payload dynamically based on input
    let payload = {
      caption,
      access_token: accessToken,
    }

    if (videoUrl) {
      payload.video_url = videoUrl

      // Set media type for videos
      payload.media_type = isStory ? "STORIES" : "REELS"
    } else if (imageUrl) {
      payload.image_url = imageUrl

      // No need to set media_type for images unless it's a story
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

    // Wait for media to be ready
    const statusUrl = `https://graph.instagram.com/v21.0/${creationId}?fields=status&access_token=${accessToken}`
    let mediaReady = false
    const maxAttempts = 10
    let attempts = 0

    while (!mediaReady && attempts < maxAttempts) {
      try {
        const statusResponse = await fetch(statusUrl)
        if (!statusResponse.ok) throw new Error("Failed to get status")

        const statusData = await statusResponse.json()
        console.log("Media status:", statusData)

        if (statusData.status?.startsWith("FINISHED")) {
          mediaReady = true
        } else {
          attempts++
          await new Promise((resolve) => setTimeout(resolve, 10000))
        }
      } catch (statusError) {
        console.error("Error checking media status:", statusError)
        break
      }
    }

    if (!mediaReady) {
      return NextResponse.json(
        { error: "Media is not ready after multiple attempts" },
        { status: 408 }
      )
    }

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

    fetch(`https://localhost:3000/api/posts?id=${savedData.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            console.error("Failed to delete post:", errorData);
          });
        }
        return response.json();
      })
      .then((result) => {
        if (result) {
          console.log("Post successfully deleted:", result);
        }
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });

    return NextResponse.json(publishData, { status: 200 })
  } catch (error) {
    console.error("Internal server error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    )
  }
}
