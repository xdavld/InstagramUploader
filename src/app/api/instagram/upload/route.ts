import { NextRequest, NextResponse } from "next/server";
import { parse } from 'cookie';

export async function POST(req) {
  try {
    const { imageUrl, videoUrl, caption, mediaType, selectedTab, scheduledTime } = await req.json();

    if ((!imageUrl && !videoUrl) || !caption) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const isVideo = !!videoUrl;
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

    let uploadResponse;

    if (selectedTab === "schedule") {
      const now = new Date();
      const delay = new Date(scheduledTime).getTime() - now.getTime();
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    uploadResponse = await fetch(
      `https://graph.instagram.com/v21.0/${userId}/media`,
      {
        method: "POST",
        body: JSON.stringify({
          ...(isVideo
            ? { video_url: videoUrl, media_type: mediaType || "REELS" }
            : { image_url: imageUrl }),
          caption,
          access_token: accessToken,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!uploadResponse) {
      return NextResponse.json(
        { error: "Upload response is undefined" },
        { status: 500 }
      );
    }

    if (!uploadResponse.ok) {
      const errorData = await uploadResponse.json();
      console.error("Upload failed:", errorData);
      return NextResponse.json(
        { error: "Upload failed", details: errorData },
        { status: 500 }
      );
    }

    const uploadData = await uploadResponse.json();
    const creationId = uploadData.id;

    const statusUrl = `https://graph.instagram.com/v21.0/${creationId}?fields=status&access_token=${accessToken}`;
    let mediaReady = false;
    const maxAttempts = 10;
    let attempts = 0;

    while (!mediaReady && attempts < maxAttempts) {
      try {
        const statusResponse = await fetch(statusUrl);
        if (!statusResponse.ok) throw new Error("Failed to get status");

        const statusData = await statusResponse.json();
        console.log("Media status:", statusData);

        if (statusData.status?.startsWith("FINISHED")) {
          mediaReady = true;
        } else {
          attempts++;
          await new Promise(resolve => setTimeout(resolve, 10000));
        }
      } catch (statusError) {
        console.error("Error checking media status:", statusError);
        break;
      }
    }

    if (!mediaReady) {
      return NextResponse.json(
        { error: "Media is not ready after multiple attempts" },
        { status: 408 }
      );
    }

    const publishResponse = await fetch(
      `https://graph.instagram.com/v21.0/${userId}/media_publish?creation_id=${creationId}&access_token=${accessToken}`,
      { method: "POST" }
    );

    if (!publishResponse.ok) {
      const publishData = await publishResponse.json();
      console.error("Publish failed:", publishData);
      return NextResponse.json(
        { error: "Publish failed", details: publishData },
        { status: 500 }
      );
    }

    const publishData = await publishResponse.json();
    return NextResponse.json(publishData, { status: 200 });

  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}