"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { uploadUserFile } from "@/db/file-actions";
import { File, Loader, Trash2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export default function UploadButton() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.size > MAX_FILE_SIZE_BYTES) {
        toast.error(`File size exceeds ${MAX_FILE_SIZE_MB} MB limit`);
      } else {
        setFiles([droppedFile]);
      }
    }
  }, []);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
        toast.error(`File size exceeds ${MAX_FILE_SIZE_MB} MB limit`);
      } else {
        setFiles([selectedFile]);
      }
    }
  }, []);

  const handleOpenChange = useCallback(() => {
    setIsOpen(!isOpen);
    setFiles([]);
  }, [isOpen]);

  const handleUpload = useCallback(async () => {
    setIsLoading(true);
    try {
      for (const file of files) {
        await uploadUserFile(file);
      }
      setIsLoading(false);
      setIsOpen(false);
      toast.success("Files uploaded successfully");
      router.refresh();
      setFiles([]);
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        toast.error(errorMessage);
      } else if (error && typeof error === "object" && "message" in error) {
        const errorMessage = (error as { message: string }).message;
        toast.error(`Error: ${errorMessage}`);
      } else {
        toast.error("An unknown error occurred");
      }
      setIsLoading(false);
    }
  }, [files]);

  const handleRemoveFile = useCallback((index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Upload className="mr-2 h-4 w-4" /> Upload Files
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        aria-describedby="drag and drop modal for files"
      >
        <DialogHeader>
          <DialogTitle>Upload Files</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>The files will be linked to your account.</p>
          <p>Maximum file size is {MAX_FILE_SIZE_MB} MB.</p>
        </DialogDescription>
        <div
          className={`mt-4 flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 transition-colors ${
            isDragging
              ? "border-primary bg-primary/10"
              : "border-muted-foreground"
          }`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={onFileChange}
            multiple
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
          >
            <File className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground text-center">
              Drag and drop your files here, or click to select files
            </p>
          </label>
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Files to upload:</h3>
            <ul className="text-sm py-4">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center hover:bg-primary/15 rounded-md pl-2"
                >
                  {file.name}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveFile(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-end mt-4">
          <Button onClick={handleUpload} disabled={files.length === 0}>
            {isLoading ? (
              <div className="flex gap-2 items-center">
                <Loader className="animate-spin" />
                <span>Uploading File</span>
              </div>
            ) : (
              "Upload Files"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
