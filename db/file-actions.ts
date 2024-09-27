import { createClient } from "@/utils/supabase/client";

export const uploadUserFile = async (file: File) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const filePath = `${user.id}/${file.name}`;
  const { data, error } = await supabase.storage
    .from("files")
    .upload(filePath, file);

  if (error) {
    throw error;
  } else {
    return data;
  }
};
