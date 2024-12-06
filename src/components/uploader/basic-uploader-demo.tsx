"use client";

import { useUploadFile } from "@/hooks/use-upload-file";
import { Button } from "@/components/ui/button";
import { FileUploader } from "@/components/file-uploader";
import { UploadedFilesCard } from "@/components/uploader/uploaded-files-card";





export function BasicUploaderDemo() {
  const { onUpload, progresses, uploadedFiles, isUploading } = useUploadFile(
    "fileUploader",
    {
      defaultUploadedFiles: [],
    }
  )

  const handlePublishToInstagram = async () => {
    try {
      const response = await fetch("/api/instagram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrl:
            "https://utfs.io/f/STVLbqOkevW6gFn6yC7LJwcOVMydbZ4toA0mNYxQkiDfKr5j",
          caption: "Hallo david #nice",
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Image published successfully:", data)
      } else {
        console.error("Failed to publish image:", (data as any).error)
      }
    } catch (error) {
      console.error("An error occurred while publishing:", error)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <FileUploader
        maxFileCount={4}
        maxSize={4 * 1024 * 1024}
        progresses={progresses}
        onUpload={onUpload}
        disabled={isUploading}
      />
      <UploadedFilesCard uploadedFiles={uploadedFiles} />
      <Button className="mt-4 w-full" onClick={handlePublishToInstagram}>
        Publish to Instagram
      </Button>
    </div>
  )
}