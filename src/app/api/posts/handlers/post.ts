import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function handlePost(req: NextRequest) {
  try {
    const { media_url, media_type, caption, user_id, upload_at, access_token, is_story} = await req.json();

    if (!media_url || !media_type || !caption || !user_id || !upload_at || !access_token || !is_story) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("posts")
      .insert([{ media_url, media_type, caption, user_id, upload_at, access_token, is_story}])
      .select();

    if (error) {
      console.error("Error inserting data:", error);
      return NextResponse.json(
        { error: "An error occurred while inserting data" },
        { status: 500 }
      );
    }

    return NextResponse.json(data[0], { status: 201 });
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
