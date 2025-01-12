// middleware.ts

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { parse } from "cookie"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Define paths that are public and do not require authentication
  const publicPaths = ["/login", "/api/", "/favicon.ico", "/_next/", "/static/"]

  // If the request is for a public path, allow it
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // For other paths, check if the user is authenticated
  const cookieHeader = request.headers.get("cookie") || ""
  const cookies = parse(cookieHeader)
  const accessToken = cookies.instagram_access_token

  if (!accessToken) {
    // If not authenticated, redirect to the login page
    const loginUrl = new URL("/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  // If authenticated, allow the request to proceed
  return NextResponse.next()
}

// Apply middleware to the /dashboard route and its subpaths
export const config = {
  matcher: ["/dashboard/:path*"],
}
