// app/api/instagram/auth/check-auth/route.js

import { parse } from "cookie"

export async function GET(request) {
  const cookieHeader = request.headers.get("cookie") || ""
  const cookies = parse(cookieHeader)
  const accessToken = cookies.instagram_access_token

  if (accessToken) {
    return new Response(JSON.stringify({ isAuthenticated: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } else {
    return new Response(JSON.stringify({ isAuthenticated: false }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
