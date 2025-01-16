import { serve } from "https://deno.land/x/sift@0.6.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")! // Service Role Key benötigt
);

console.log("Before")
console.log(Deno.env.get("SUPABASE_URL"));
console.log("after")

serve(async () => {
  try {
    // Holen der aktuellen Zeit
    const now = new Date().toISOString();

    console.log("Checking for uploads at:", now);

    // Abrufen der Einträge, deren `upload_at` <= aktuelle Zeit ist
    const { data, error } = await supabase
      .from("posts")
      .select("media_url, media_type, caption, user_id, access_token, upload_at, id")
      .lte("upload_at", now);

    if (error) {
      console.error("Error fetching posts:", error);
      return new Response(JSON.stringify({ error: "Error fetching posts" }), {
        status: 500,
      });
    }

    if (!data || data.length === 0) {
      console.log("No posts ready for upload.");
      return new Response(JSON.stringify({ message: "No posts ready for upload" }), {
        status: 200,
      });
    }

    console.log("Posts ready for upload:", data);

    // Für jeden Eintrag HTTP POST ausführen
    for (const post of data) {
      const { media_url, media_type, caption, user_id, access_token, id } = post;

      try {
        const response = await fetch(
          "https://software-engineering-project-eight.vercel.app/api/instagram/upload",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Cookie: `instagram_access_token=${access_token}; instagram_user_id=${user_id}`,
            },
            body: JSON.stringify({
              media_url,
              media_type,
              caption,
            }),
          }
        );

        if (!response.ok) {
          console.error(`Failed to upload post with ID ${id}:`, await response.text());
        } else {
          console.log(`Successfully uploaded post with ID ${id}`);

          // Markiere den Eintrag als verarbeitet, falls nötig (z. B. upload_at = NULL)
          await supabase
            .from("posts")
            .update({ upload_at: null })
            .eq("id", id);
        }
      } catch (httpError) {
        console.error(`HTTP request failed for post with ID ${id}:`, httpError);
      }
    }

    return new Response(JSON.stringify({ message: "Upload process completed" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Unexpected error occurred" }), {
      status: 500,
    });
  }
});
