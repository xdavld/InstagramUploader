;
// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parse } from "cookie"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const previewMode = request.nextUrl.searchParams.get("preview") === "true"

  console.log(`Middleware invoked for path: ${pathname}`)

  // Define paths that are public and do not require authentication
  const publicPaths = ["/login", "/favicon.ico", "/_next/", "/static/", "/public"]

  if (previewMode) {
    console.log("Preview mode detected. Allowing access.")
    return NextResponse.next()
  }

  if (publicPaths.some((path) => pathname.startsWith(path))) {
    console.log(`Allowing public path: ${pathname}`)
    return NextResponse.next()
  }

  // Check authentication for other paths
  const cookieHeader = request.headers.get("cookie") || ""
  const cookies = parse(cookieHeader)
  const accessToken = cookies.instagram_access_token

  console.log(`Access Token: ${accessToken}`)

  if (!accessToken) {
    const loginUrl = new URL("/login", request.url)
    console.log(`Redirecting to login: ${loginUrl}`)
    return NextResponse.redirect(loginUrl)
  }

  console.log(`Authenticated access to: ${pathname}`)
  return NextResponse.next()
}

// Apply middleware to the /uploader route and its subpaths
export const config = {
  matcher: ["/uploader/:path*"],
}