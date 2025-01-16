import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function handleGet(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user_id");

    if (!userId) {
      return NextResponse.json(
        { error: "Missing user_id parameter" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error("Error fetching data:", error);
      return NextResponse.json(
        { error: "An error occurred while fetching data" },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
