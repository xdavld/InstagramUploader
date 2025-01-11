// app/api/auth/logout/route.js

import { NextResponse } from "next/server"
import { serialize } from "cookie"

export async function GET(request) {
  const cookie = serialize("instagram_access_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
    path: "/",
    sameSite: "lax",
  })

  const response = NextResponse.redirect("/login")
  response.headers.set("Set-Cookie", cookie)
  return response
}
