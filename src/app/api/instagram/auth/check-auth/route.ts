import { NextResponse } from "next/server"
import { parse } from "cookie"

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get("cookie") || ""
    const cookies = parse(cookieHeader)
    const accessToken = cookies.instagram_access_token

    if (accessToken) {
      // Optionally, validate the token (e.g., check expiration or structure)
      return NextResponse.json({ isAuthenticated: true }, { status: 200 })
    }

    // Token is missing
    return NextResponse.json({ isAuthenticated: false }, { status: 200 })
  } catch (error) {
    console.error("Error in check-auth route:", error)
    return NextResponse.json(
      { isAuthenticated: false, error: "An error occurred" },
      { status: 500 }
    )
  }
}
