import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

export async function GET(req) {
  try {
    // Parse cookies
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = parse(cookieHeader);

    return NextResponse.json(cookies.instagram_user_id, { status: 200 });
    } catch (error) {
        console.error("Internal server error:", error.message);
        return NextResponse.json(
            { error: "Internal server error", details: error.message },
            { status: 500 }
        );
    }
}