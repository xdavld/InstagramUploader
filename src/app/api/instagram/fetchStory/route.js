import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

export async function GET(req) {
  try {
    // Parse cookies
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

    const fetchAllStories = async () => {
      let allStories = [];
      let nextUrl = `https://graph.instagram.com/v21.0/${userId}/stories`;

      while (nextUrl) {
        const storiesResponse = await fetch(nextUrl, {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (!storiesResponse.ok) {
          const errorData = await storiesResponse.json();
          console.error("Failed to fetch stories list:", errorData);
          throw new Error("Failed to fetch stories list");
        }

        const storiesList = await storiesResponse.json();
        allStories = allStories.concat(storiesList.data);
        nextUrl = storiesList.paging?.next || null; // Check for next page
      }

      return allStories;
    };

    // Step 1: Fetch all stories
    const allStories = await fetchAllStories();

    // Step 2: Fetch details for each unique story ID
    const storyDetailsPromises = allStories.map(async (story) => {
      try {
        const storyDetailsResponse = await fetch(
          `https://graph.instagram.com/v21.0/${story.id}?fields=id,media_type,media_url,timestamp`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        if (!storyDetailsResponse.ok) {
          console.error("Failed to fetch story details:", storyDetailsResponse);
          return null;
        }

        const storyDetails = await storyDetailsResponse.json();
        return {
          id: storyDetails.id,
          media_type: storyDetails.media_type,
          media_url: storyDetails.media_url,
          timestamp: storyDetails.timestamp,
        };
      } catch (err) {
        console.error("Error fetching story details:", err.message);
        return null;
      }
    });

    const storyDetails = await Promise.all(storyDetailsPromises);

    // Step 3: Filter out any null results
    const validStoryDetails = storyDetails.filter((story) => story !== null);

    // Step 4: Return the story details
    return NextResponse.json(validStoryDetails, { status: 200 });
  } catch (error) {
    console.error("Internal server error:", error.message);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
