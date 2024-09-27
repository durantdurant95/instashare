import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/utils/supabase/server";
import { FileIcon, Shield, Trash2, Upload, Zap } from "lucide-react";

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

export default async function Index() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return (
      <main className="flex-1 flex flex-col gap-6 px-4">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Share Files with Ease
          </h1>
          <p className="mx-auto max-w-[900px]  md:text-xl">
            Upload, share, and manage your files securely. Fast, reliable, and
            user-friendly.
          </p>
          <h1 className="text-2xl font-bold tracking-tighter pt-3">
            Login or sign up to get started
          </h1>
        </section>
        {/* Separator */}
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Why Choose InstaShare?
          </h2>
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Your files are encrypted and protected with industry-leading
                security measures.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Fast</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Experience lightning-fast upload and download speeds.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <main className="flex-1 flex flex-col py-4 md:py-8 gap-6 px-4 w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Uploaded Files</h1>
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            Upload Files
          </Button>
        </div>
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
      </main>
    );
  }
}
