"use client";
import { deleteUserFile } from "@/db/file-actions";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./ui/button";

type Props = { filePath: string };

export default function DeleteButton({ filePath }: Props) {
  const router = useRouter();
  const handleDeleteFile = async (filePath: string) => {
    // Show toast notifications
    toast.promise(deleteUserFile(filePath), {
      loading: "Deleting file",
      success: () => {
        router.refresh();
        return "File deleted successfully";
      },
      error: "Failed to delete file",
    });
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
