import axios from "axios"
import { parse } from "cookie"

export async function GET(req) {
  try {
    // Parse cookies to retrieve the access token
    const cookieHeader = req.headers.get("cookie") || ""
    const cookies = parse(cookieHeader)
    const accessToken = cookies.instagram_access_token;

    if (!accessToken) {
      console.warn("Access token not found in cookies.")
      return new Response(JSON.stringify({ error: "Access token not found" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Fetch profile data from Instagram Graph API
    const response = await axios.get("https://graph.instagram.com/v21.0/me", {
      params: {
        fields: "user_id,username,profile_picture_url",
        access_token: accessToken,
      },
    });

    // Respond with the fetched data
    return new Response(
      JSON.stringify({
        userId: response.data.id,
        username: response.data.username,
        profilePictureUrl: response.data.profile_picture_url,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Instagram API Error:",
        error.response?.data || error.message
      )
      return new Response(
        JSON.stringify({
          error:
            error.response?.data?.error?.message ||
            "Failed to fetch profile data from Instagram",
        }),
        {
          status: error.response?.status || 500,
          headers: { "Content-Type": "application/json" },
        }
      )
    } else {
      console.error("Unexpected Error:", error)
      return new Response(
        JSON.stringify({ error: "An unexpected error occurred" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }
  }
}
