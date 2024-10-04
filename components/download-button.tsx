"use client";
import { downloadFile } from "@/db/file-actions";
import { Download } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./ui/button";

type Props = { filePath: string };

export default function DownloadButton({ filePath }: Props) {
  const router = useRouter();
  const handleDownloadFile = async (filePath: string) => {
    // Show toast notifications
    toast.promise(downloadFile(filePath), {
      loading: "Downloading file",
      success: () => {
        router.refresh();
        return "File downloaded successfully";
      },
      error: "Failed to download file",
    });
  };
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => handleDownloadFile(filePath)}
      className="flex items-center gap-2 w-full justify-start"
    >
      <Download className="w-4 h-4" /> Download File
    </Button>
  );
}
