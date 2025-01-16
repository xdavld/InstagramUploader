import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST() {
  try {
    const now = new Date().toISOString();

    // Fetch posts that are due and not yet processed
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .lte("upload_at", now)
      .eq("processed", false);

    if (error) {
      console.error("Error fetching scheduled posts:", error);
      return NextResponse.json(
        { error: "Failed to fetch scheduled posts" },
        { status: 500 }
      );
    }

    for (const post of data) {
      try {
        // Prepare the payload dynamically based on input
        let payload: any = {
          caption: post.caption,
          access_token: post.access_token,
        };

        if (post.video_url) {
          payload.video_url = post.video_url;
          payload.media_type = post.is_story ? "STORIES" : "REELS";
        } else if (post.image_url) {
          payload.image_url = post.image_url;
          if (post.is_story) {
            payload.media_type = "STORIES";
          }
        }

        // Upload media
        const uploadResponse = await fetch(
          `https://graph.instagram.com/v21.0/${post.user_id}/media`,
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.json();
          console.error("Upload failed:", errorData);
          continue; // Skip to the next post
        }

        const uploadData = await uploadResponse.json();
        const creationId = uploadData.id;

        // Publish the media
        const publishResponse = await fetch(
          `https://graph.instagram.com/v21.0/${post.user_id}/media_publish?creation_id=${creationId}&access_token=${post.access_token}`,
          { method: "POST" }
        );

        if (!publishResponse.ok) {
          const publishData = await publishResponse.json();
          console.error("Publish failed:", publishData);
          continue; // Skip to the next post
        }

        const publishData = await publishResponse.json();
        console.log("Post published:", publishData);

        // Mark the post as processed
        const { error: updateError } = await supabase
          .from("posts")
          .update({ processed: true })
          .eq("id", post.id);

        if (updateError) {
          console.error(`Failed to update post ${post.id}:`, updateError);
        }
      } catch (postError) {
        console.error(`Error processing post ${post.id}:`, postError);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Internal server error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}