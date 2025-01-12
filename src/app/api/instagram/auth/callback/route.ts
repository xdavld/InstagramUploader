// app/api/instagram/callback/route.ts

import { NextResponse } from "next/server"
import axios from "axios"
import { serialize } from "cookie"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code not provided" },
      { status: 400 }
    )
  }

  try {
    // Exchange the authorization code for an access token
    const tokenResponse = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      new URLSearchParams({
        client_id: process.env.INSTAGRAM_CLIENT_ID!,
        client_secret: process.env.INSTAGRAM_CLIENT_SECRET!,
        grant_type: "authorization_code",
        redirect_uri: process.env.INSTAGRAM_REDIRECT_URI!,
        code,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )

    const { access_token } = tokenResponse.data

    // Set the access token in a secure HTTP-only cookie
    const cookie = serialize("instagram_access_token", access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
      sameSite: "lax",
    })

    const response = NextResponse.redirect("/uploader") 
    response.headers.set("Set-Cookie", cookie)
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
