"use server";

import { createClient } from "@/utils/supabase/server";

export const fetchUserFiles = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase.storage
    .from("files")
    .list(user?.id + "/");
  if (error) {
    console.error("Error fetching files:", error);
    return null;
  } else {
    console.log("Files fetched successfully:", data);
    return data;
  }
};
