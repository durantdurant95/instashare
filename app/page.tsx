import FileUploadButton from "@/components/file-upload-button";
import FilesTable from "@/components/files-table";
import { createClient } from "@/utils/supabase/server";
import { Shield, Zap } from "lucide-react";

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
      <main className="flex-1 flex flex-col py-4 md:py-8 gap-8 px-4 w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Uploaded Files</h1>
          {/* <Button>
            <Upload className="w-4 h-4 mr-2" />
            Upload Files
          </Button> */}
          <FileUploadButton />
        </div>
        <FilesTable userId={user.id} />
      </main>
    );
  }
}
