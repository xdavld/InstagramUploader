import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Supabase-Client initialisieren
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(req) {
  try {
    // user_id aus der Anfrage-URL abrufen
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("user_id");

    if (!user_id) {
      return NextResponse.json(
        { error: "Missing required parameter: user_id" },
        { status: 400 }
      );
    }

    // Daten aus der Supabase abrufen
    const { data, error } = await supabase
      .from("posts") // Tabelle "posts" in Supabase
      .select("*")
      .eq("user_id", user_id);

    if (error) {
      console.error("Supabase Fetch Error:", error);
      return NextResponse.json(
        { error: "Failed to fetch posts", details: error.message },
        { status: 500 }
      );
    }

    // Erfolgreiche Antwort
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Internal server error:", error.message);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}