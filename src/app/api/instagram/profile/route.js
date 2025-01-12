// app/api/fetchFacebookData/route.js

import { NextResponse } from "next/server";
import { env } from "@/env" // Ensure this points to your environment variables


export async function GET() {
  const url = `https://graph.facebook.com/v21.0/me?fields=id,picture,name&access_token=${env.INSTAGRAM_ACCESS_TOKEN}`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data
    
  } catch (error) {
    console.error("Error fetching Instagram data:", error);
    return NextResponse.json(
      { error: "Failed to fetch Instagram data" },
      { status: 500 }
    );
  }
}
