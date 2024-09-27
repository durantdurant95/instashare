"use client";
import { deleteUserFile } from "@/db/file-actions";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./ui/button";

type Props = { filePath: string };

export default function DeleteButton({ filePath }: Props) {
  const router = useRouter();

  const handleDeleteFile = async (fileId: string) => {
    // Delete file from storage
    toast.promise(deleteUserFile(fileId), {
      loading: "Deleting file",
      success: "File deleted successfully",
      error: "Failed to delete file",
    });
    router.refresh();
  };
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => handleDeleteFile(filePath)}
    >
      <Trash2 className="w-4 h-4" />
    </Button>
  );
}
