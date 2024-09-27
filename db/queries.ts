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
    return null;
  } else {
    return data;
  }
};
