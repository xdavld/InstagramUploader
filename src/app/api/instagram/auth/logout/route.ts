;
// app/api/instagram/auth/logout/route.ts

import { NextResponse } from "next/server";
import { serialize } from "cookie"

export async function POST(request: Request) {
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