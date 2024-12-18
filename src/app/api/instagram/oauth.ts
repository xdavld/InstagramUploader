import { NextRequest, NextResponse } from "next/server";





export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get("code")

  if (!code) {
    return NextResponse.json(
      { error: "Missing code parameter" },
      { status: 400 }
    )
  }

  const clientId = "967181185255438"
  const clientSecret = "fa780fc9e34c76b662d8d539e7d964e8"
  const redirectUri = "http://localhost:3000/"

  const tokenResponse = await fetch(
    "https://api.instagram.com/oauth/access_token",
    {
      method: "POST",
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
        code,
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  )

  const tokenData = await tokenResponse.json()

  if (!tokenResponse.ok) {
    return NextResponse.json(
      { error: tokenData.error_message },
      { status: 400 }
    )
  }

  // Save the access token in localStorage via frontend (or securely via cookies)
  return NextResponse.json(tokenData, { status: 200 })
}