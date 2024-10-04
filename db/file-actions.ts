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

export const deleteUserFile = async (filePath: string) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase.storage
    .from("files")
    .remove([filePath]);

  if (error) {
    throw error;
  } else {
    return data;
  }
};

// Function to download a file
export const downloadFile = async (filePath: string) => {
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from("files")
    .download(filePath);

  if (error) {
    throw error;
  } else {
    // Create a Blob URL for the file data
    const blobUrl = URL.createObjectURL(data);

    // Create a link element
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filePath.split("/").pop() || "download";

    // Append the link to the document and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the link and revoking the Blob URL
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);

    return data;
  }
};
