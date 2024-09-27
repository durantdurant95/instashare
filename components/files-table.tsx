import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchUserFiles } from "@/db/queries";
import { FileIcon } from "lucide-react";
import DeleteButton from "./delete-button";

type Props = { userId: string };
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
                <TableCell>{file.metadata.size}</TableCell>
                <TableCell>{file.updated_at}</TableCell>
                <TableCell className="text-right">
                  <DeleteButton filePath={`${userId}/${file.name}`} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
