import { serve } from "https://deno.land/x/sift@0.6.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")! // Service Role Key erforderlich
);

serve(async () => {
    try {
      console.log("Fetching all entries...");
      const { data, error } = await supabase.from("posts").select("*");
  
      if (error) {
        console.error("Database error:", error);
        return new Response("Database error", { status: 500 });
      }
  
      console.log("Entries fetched:", data);
  
      // Rückgabe der Daten als JSON
      return new Response(JSON.stringify({ message: "Data fetched", data }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Unexpected error:", err);
      return new Response("Unexpected error", { status: 500 });
    }
  });
  