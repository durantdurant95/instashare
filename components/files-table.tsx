import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileIcon, Trash2 } from "lucide-react";

const files = [
  {
    id: 1,
    name: "example.pdf",
    size: "1.2 MB",
    uploadDate: "2021-10-01",
  },
  {
    id: 2,
    name: "example.png",
    size: "2.4 MB",
    uploadDate: "2021-10-02",
  },
  {
    id: 3,
    name: "example.docx",
    size: "3.6 MB",
    uploadDate: "2021-10-03",
  },
  {
    id: 4,
    name: "example4.txt",
    size: "1.1 MB",
    uploadDate: "2021-10-04",
  },
  {
    id: 5,
    name: "example5.jpg",
    size: "2.2 MB",
    uploadDate: "2021-10-05",
  },
  {
    id: 6,
    name: "example6.pdf",
    size: "3.3 MB",
    uploadDate: "2021-10-06",
  },
  {
    id: 7,
    name: "example7.png",
    size: "4.4 MB",
    uploadDate: "2021-10-07",
  },
  {
    id: 8,
    name: "example8.docx",
    size: "5.5 MB",
    uploadDate: "2021-10-08",
  },
  {
    id: 9,
    name: "example9.txt",
    size: "1.6 MB",
    uploadDate: "2021-10-09",
  },
  {
    id: 10,
    name: "example10.jpg",
    size: "2.7 MB",
    uploadDate: "2021-10-10",
  },
  {
    id: 11,
    name: "example11.pdf",
    size: "3.8 MB",
    uploadDate: "2021-10-11",
  },
  {
    id: 12,
    name: "example12.png",
    size: "4.9 MB",
    uploadDate: "2021-10-12",
  },
  {
    id: 13,
    name: "example13.docx",
    size: "5.0 MB",
    uploadDate: "2021-10-13",
  },
  {
    id: 14,
    name: "example14.txt",
    size: "1.1 MB",
    uploadDate: "2021-10-14",
  },
  {
    id: 15,
    name: "example15.jpg",
    size: "2.2 MB",
    uploadDate: "2021-10-15",
  },
  {
    id: 16,
    name: "example16.pdf",
    size: "3.3 MB",
    uploadDate: "2021-10-16",
  },
  {
    id: 17,
    name: "example17.png",
    size: "4.4 MB",
    uploadDate: "2021-10-17",
  },
  {
    id: 18,
    name: "example18.docx",
    size: "5.5 MB",
    uploadDate: "2021-10-18",
  },
  {
    id: 19,
    name: "example19.txt",
    size: "1.6 MB",
    uploadDate: "2021-10-19",
  },
  {
    id: 20,
    name: "example20.jpg",
    size: "2.7 MB",
    uploadDate: "2021-10-20",
  },
  {
    id: 21,
    name: "example21.pdf",
    size: "3.8 MB",
    uploadDate: "2021-10-21",
  },
  {
    id: 22,
    name: "example22.png",
    size: "4.9 MB",
    uploadDate: "2021-10-22",
  },
  {
    id: 23,
    name: "example23.docx",
    size: "5.0 MB",
    uploadDate: "2021-10-23",
  },
];

export default function FilesTable() {
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
          {files.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No files uploaded yet.
              </TableCell>
            </TableRow>
          ) : (
            files.map((file) => (
              <TableRow key={file.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <FileIcon className="w-4 h-4 mr-2" />
                    {file.name}
                  </div>
                </TableCell>
                <TableCell>{file.size}</TableCell>
                <TableCell>{file.uploadDate}</TableCell>
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
