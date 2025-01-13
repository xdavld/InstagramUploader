// middleware.ts

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { parse } from "cookie"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  console.log(`Middleware invoked for path: ${pathname}`) // Debug log

  // Define paths that are public and do not require authentication
  const publicPaths = ["/login", "/favicon.ico", "/_next/", "/static/"]

  // If the request is for a public path, allow it
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    console.log(`Allowing public path: ${pathname}`)
    return NextResponse.next()
  }

  // For other paths, check if the user is authenticated
  const cookieHeader = request.headers.get("cookie") || ""
  const cookies = parse(cookieHeader)
  const accessToken = cookies.instagram_access_token

  console.log(`Access Token: ${accessToken}`)

  if (!accessToken) {
    // If not authenticated, redirect to the login page
    const loginUrl = new URL("/login", request.url)
    console.log(`Redirecting to login: ${loginUrl}`)
    return NextResponse.redirect(loginUrl)
  }

  // If authenticated, allow the request to proceed
  console.log(`Authenticated access to: ${pathname}`)
  return NextResponse.next()
}

// Apply middleware to the /uploader route and its subpaths
export const config = {
  matcher: ["/uploader/:path*"],
}
