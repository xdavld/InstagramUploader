import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Supabase-Client initialisieren
const supabase = createClient(supabaseUrl, supabaseKey);

export async function DELETE(req) {
  try {
    // id aus der Anfrage-URL abrufen
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing required parameter: id" },
        { status: 400 }
      );
    }

    // Post aus der Supabase-Datenbank löschen
    const { data, error } = await supabase
      .from("posts") // Tabelle "posts" in Supabase
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase Delete Error:", error);
      return NextResponse.json(
        { error: "Failed to delete post", details: error.message },
        { status: 500 }
      );
    }

    if (data.length === 0) {
      return NextResponse.json(
        { message: "Post not found or already deleted" },
        { status: 404 }
      );
    }

    // Erfolgreiche Antwort
    return NextResponse.json(
      { message: "Post deleted successfully", deletedPost: data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Internal server error:", error.message);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
