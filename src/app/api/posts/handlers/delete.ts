import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function handleDelete(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing id parameter" },
        { status: 400 }
      );
    }

    const { data, error, count } = await supabase
      .from("posts")
      .delete()
      .eq("id", id)
      .select("*", { count: "exact" });

    if (error) {
      console.error("Error deleting data:", error);
      return NextResponse.json(
        { error: "An error occurred while deleting data" },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "No record found with the given ID" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Post successfully deleted",
        deletedPost: data[0],
        totalDeleted: count,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
