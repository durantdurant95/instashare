import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchUserFiles } from "@/db/queries";
import { FileIcon, Trash2 } from "lucide-react";

export default async function FilesTable() {
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
                <TableCell>{file.metadata.size}</TableCell>
                <TableCell>{file.updated_at}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    // onClick={() => handleDeleteFile(file.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
