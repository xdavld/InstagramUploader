import { NextResponse } from "next/server"
import axios from "axios"
import { serialize } from "cookie"

export async function GET(request: Request) {
  console.log("Callback route hit") // Log route access

  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  console.log("Authorization code:", code) // Log the authorization code

  if (!code) {
    console.error("No authorization code provided")
    return NextResponse.json(
      { error: "Authorization code not provided" },
      { status: 400 }
    )
  }

  try {
    console.log("Exchanging code for access token...")
    const tokenResponse = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      new URLSearchParams({
        client_id: process.env.INSTAGRAM_CLIENT_ID || "",
        client_secret: process.env.INSTAGRAM_CLIENT_SECRET || "",
        grant_type: "authorization_code",
        redirect_uri: process.env.INSTAGRAM_REDIRECT_URI || "",
        code,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )

    console.log("Token response received:", tokenResponse.data)
    const { access_token, user_id } = tokenResponse.data

    if (!access_token || !user_id) {
      console.error("Access token or user ID missing in response")
      return NextResponse.json(
        { error: "Access token or user ID not provided in response" },
        { status: 500 }
      )
    }

    console.log("Setting access token and user ID cookies...")
    const accessTokenCookie = serialize(
      "instagram_access_token",
      access_token,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60, // 1 week
        path: "/",
        sameSite: "lax",
      }
    )

    const userIdCookie = serialize("instagram_user_id", user_id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 week
      path: "/",
      sameSite: "lax",
    })

    console.log("Redirecting to /uploader...")
    const redirectUrl = new URL("/uploader", request.url).toString() // Construct absolute URL
    const response = NextResponse.redirect(redirectUrl)

    response.headers.set("Set-Cookie", accessTokenCookie)
    response.headers.append("Set-Cookie", userIdCookie)
    return response
  } catch (error: any) {
    console.error(
      "Error exchanging code for access token:",
      error.response?.data || error.message
    )
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
