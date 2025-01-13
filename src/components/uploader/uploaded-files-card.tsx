import React, { useState } from "react";
import Image from "next/image";
import type { UploadedFile } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { EmptyCard } from "@/components/empty-card";

interface UploadedFilesCardProps {
  uploadedFiles: UploadedFile[]
  onSelectFile: (fileUrl: string | null, fileType?: string) => void // Updated callback prop
}

export function UploadedFilesCard({
  uploadedFiles,
  onSelectFile,
}: UploadedFilesCardProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

const handleFileClick = (file: UploadedFile) => {
  const newSelection = selectedFile === file.key ? null : file.key // Toggle selection
  setSelectedFile(newSelection)
  onSelectFile(newSelection ? file.url : null, newSelection ? file.type : "") // Pass file data or reset
}

  const isImage = (file: UploadedFile) => file.type.startsWith("image")
  const isVideo = (file: UploadedFile) => file.type.startsWith("video")

  return (
  <Card>
    <CardHeader>
      <CardTitle data-testid="uploaded-files-title">Uploaded files</CardTitle>
      <CardDescription data-testid="uploaded-files-description">
        View the uploaded files here
      </CardDescription>
    </CardHeader>
    <CardContent>
      {uploadedFiles.length > 0 ? (
        <ScrollArea className="pb-4">
          <div className="flex w-max space-x-2.5">
            {uploadedFiles.map((file) => (
                <div
                  key={file.key}
                  data-testid={`uploaded-file-${file.key}`}
                  className={`relative aspect-video w-64 cursor-pointer rounded-md border transition-all duration-300 ${
                    selectedFile === file.key
                      ? "border-gray-500 bg-gray-100" // Selected file styles
                      : "border-gray-200 bg-white" // Default styles
                  }`}
                  onClick={() => handleFileClick(file)}
                >
                {isImage(file) ? (
                  <Image
                    src={file.url}
                    alt={file.name}
                    fill
                    sizes="(min-width: 640px) 640px, 100vw"
                    loading="lazy"
                    className="rounded-md object-cover"
                  />
                ) : isVideo(file) ? (
                  <div className="relative h-full w-full overflow-hidden rounded-md">
                    <video
                      src={file.url}
                      controls
                      className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-md object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
                    Unsupported file type
                  </div>
                )}
                {selectedFile === file.key && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 font-bold text-white focus-within:outline-none focus-within:ring-0">
                  Selected
                </div>
                )}
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : (
        <EmptyCard
          title="No files uploaded"
          description="Upload some files to see them here"
          className="w-full"
        />
      )}
    </CardContent>
  </Card>
  )
}