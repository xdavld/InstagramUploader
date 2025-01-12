// app/api/instagram/auth/check-auth/route.ts

import { NextResponse } from "next/server"
import { parse } from "cookie"

export async function GET(request: Request) {
  const cookieHeader = request.headers.get("cookie") || ""
  const cookies = parse(cookieHeader)
  const accessToken = cookies.instagram_access_token

  if (accessToken) {
    return NextResponse.json({ isAuthenticated: true }, { status: 200 })
  } else {
    return NextResponse.json({ isAuthenticated: false }, { status: 200 })
  }
}
