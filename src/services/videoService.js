import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://uctquoblzortmvrxcffc.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjdHF1b2Jsem9ydG12cnhjZmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NjEzOTksImV4cCI6MTk4NDAzNzM5OX0.uDJtxFmd6lZUbNza3Kk36VA10l9pai5Ab-oeoNxKxrk";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
