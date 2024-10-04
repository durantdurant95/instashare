import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchUserFiles } from "@/db/queries";
import { FileIcon, MoreVertical } from "lucide-react";
import DeleteButton from "./delete-button";
import DownloadButton from "./download-button";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
  userId: string;
};

export default async function FilesTable({ userId }: Props) {
  const files = await fetchUserFiles();
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>File Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Upload Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No files uploaded yet.
              </TableCell>
            </TableRow>
          ) : (
            files?.map((file) => (
              <TableRow key={file.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <FileIcon className="w-4 h-4 mr-2" />
                    {file.name}
                  </div>
                </TableCell>
                <TableCell>
                  {file.metadata.size < 1024 * 1024
                    ? `${(file.metadata.size / 1024).toFixed(2)} KB`
                    : `${(file.metadata.size / (1024 * 1024)).toFixed(2)} MB`}
                </TableCell>
                <TableCell>{file.updated_at}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={5} align="end">
                      <DropdownMenuItem>
                        <DownloadButton filePath={`${userId}/${file.name}`} />
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <DeleteButton filePath={`${userId}/${file.name}`} />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
