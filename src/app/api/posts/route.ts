import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Define request body type
type PostRequestBody = {
  media_url: string;
  media_type: string; // e.g., "image" or "video"
  caption: string;
  user_id: string; // User ID of the creator
};

// Define API response type
type PostResponse = {
  id: string;
  media_url: string;
  media_type: string;
  caption: string;
  user_id: string;
};

export async function POST(req: NextRequest) {
  try {
    const { media_url, media_type, caption, user_id } = (await req.json()) as PostRequestBody;

    // Validate required fields
    if (!media_url || !media_type || !caption || !user_id) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Incoming Request:", { media_url, media_type, caption, user_id });

    // Insert into the database
    const { data, error } = await supabase
      .from("posts") // Table name
      .insert([
        {
          media_url,
          media_type,
          caption,
          user_id,
        },
      ])
      .select(); // Return the inserted row

    if (error) {
      console.error("Error inserting data:", error);
      return NextResponse.json(
        { error: "An error occurred while inserting data" },
        { status: 500 }
      );
    }

    // Return the created post as a response
    const response: PostResponse = data[0];

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Extrahiere die user_id aus der Query-Parameter
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user_id");

    // Überprüfe, ob die user_id vorhanden ist
    if (!userId) {
      return NextResponse.json(
        { error: "Missing user_id parameter" },
        { status: 400 }
      );
    }

    console.log("Fetching posts for user_id:", userId);

    // Abrufen der Einträge aus der Datenbank
    const { data, error } = await supabase
      .from("posts") // Tabelle "posts"
      .select("*")
      .eq("user_id", userId); // Filtern nach user_id

    if (error) {
      console.error("Error fetching data:", error);
      return NextResponse.json(
        { error: "An error occurred while fetching data" },
        { status: 500 }
      );
    }

    // Rückgabe der Einträge
    return NextResponse.json(data as PostResponse[], { status: 200 });
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}


export async function DELETE(req: NextRequest) {
  try {
    // Extrahiere die id aus den Query-Parametern
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Überprüfe, ob die ID vorhanden ist
    if (!id) {
      return NextResponse.json(
        { error: "Missing id parameter" },
        { status: 400 }
      );
    }

    console.log("Deleting post with id:", id);

    // Löschen des Eintrags aus der Datenbank
    const { data, error, count } = await supabase
      .from("posts") // Tabelle "posts"
      .delete()
      .eq("id", id)
      .select("*", { count: "exact" }); // Abrufen der gelöschten Zeilen und Zählen der betroffenen Zeilen

    if (error) {
      console.error("Error deleting data:", error);
      return NextResponse.json(
        { error: "An error occurred while deleting data" },
        { status: 500 }
      );
    }

    // Überprüfen, ob tatsächlich etwas gelöscht wurde
    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "No record found with the given ID" },
        { status: 404 }
      );
    }

    console.log("Deleted post:", data[0]);

    // Rückgabe der gelöschten Zeile mit zusätzlichen Informationen
    return NextResponse.json(
      {
        message: "Post successfully deleted",
        deletedPost: data[0],
        totalDeleted: count, // Anzahl der gelöschten Zeilen
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