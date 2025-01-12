import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function GET(request: Request) {
  try {
    const cookie = serialize("instagram_access_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0),
      path: "/",
      sameSite: "lax",
    });

    const response = NextResponse.redirect(new URL("/login", request.url));
    response.headers.set("Set-Cookie", cookie);
    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}