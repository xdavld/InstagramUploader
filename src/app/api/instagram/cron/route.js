import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";





export async function GET() {
  try {
    // 1. Connect to Supabase (with a Service Key for update/delete)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    // 2. Fetch all scheduled posts that are due (upload_at <= now and not published)
    const nowISO = new Date().toISOString()
    const { data: duePosts, error } = await supabase
      .from("posts")
      .select("*")
      .lte("upload_at", nowISO)

    if (error) {
      console.error("DB fetch error:", error)
      return NextResponse.json(
        { error: "Failed to fetch scheduled posts" },
        { status: 500 }
      )
    }

    // 3. For each due post, upload + publish to Instagram
    for (const post of duePosts) {
      try {
        const {
          access_token,
          user_id,
          media_url,
          media_type,
          caption,
          is_story,
          id,
        } = post

        // Prepare the payload for the "upload media" step
        const payload = {
          caption,
          access_token,
        }

        // If video
        if (media_type === "video") {
          payload.video_url = media_url
          // Decide whether it's a Story or Reel
          payload.media_type = is_story === "true" ? "STORIES" : "REELS"
        } else {
          // If image
          payload.image_url = media_url
          if (is_story === "true") {
            payload.media_type = "STORIES"
          }
        }

        // =========== (A) Upload Step ===========
        const uploadRes = await fetch(
          `https://graph.instagram.com/v21.0/${user_id}/media`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        )
        if (!uploadRes.ok) {
          const errData = await uploadRes.json()
          throw new Error(`Upload failed: ${JSON.stringify(errData)}`)
        }

        const { id: creationId } = await uploadRes.json()

        // =========== (B) Wait for media to be ready ===========
        const statusUrl = `https://graph.instagram.com/v21.0/${creationId}?fields=status&access_token=${access_token}`
        let mediaReady = false
        let attempts = 0
        const maxAttempts = 10

        while (!mediaReady && attempts < maxAttempts) {
          const statusRes = await fetch(statusUrl)
          if (!statusRes.ok) {
            throw new Error("Failed to get media status from Instagram.")
          }
          const statusData = await statusRes.json()

          if (statusData.status && statusData.status.startsWith("FINISHED")) {
            mediaReady = true
          } else {
            attempts++
            // Wait 10 seconds before checking again
            await new Promise((resolve) => setTimeout(resolve, 10000))
          }
        }

        if (!mediaReady) {
          throw new Error("Media not ready after multiple attempts.")
        }

        // =========== (C) Publish Step ===========
        const publishUrl = `https://graph.instagram.com/v21.0/${user_id}/media_publish?creation_id=${creationId}&access_token=${access_token}`
        const publishRes = await fetch(publishUrl, { method: "POST" })
        if (!publishRes.ok) {
          const publishErr = await publishRes.json()
          throw new Error(`Publish failed: ${JSON.stringify(publishErr)}`)
        }

        // =========== (D) Mark as published or delete ===========
        // Option 1: Mark as published
        await supabase.from("posts").update({ published: true }).eq("id", id)

        // Option 2: Delete from DB (uncomment if you prefer removing the record)
        // await supabase
        //   .from("posts")
        //   .delete()
        //   .eq("id", id)
      } catch (err) {
        console.error("Error publishing post (ID: " + post.id + "):", err)
      }
    }

    // 4. Return success
    return NextResponse.json(
      { message: "Cron processed successfully", posted: duePosts.length },
      { status: 200 }
    )
  } catch (error) {
    console.error("Cron error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}