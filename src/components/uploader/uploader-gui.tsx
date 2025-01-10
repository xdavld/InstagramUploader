import React, { useEffect, useState } from "react"

import { useUploadFile } from "@/hooks/use-upload-file"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { FileUploader } from "@/components/uploader/file-uploader"
import {
  PublishPayload,
  publishToInstagram,
} from "@/components/uploader/instagramPublish"
import { UploadedFilesCard } from "@/components/uploader/uploaded-files-card"

export function Uploader() {
  const { onUpload, progresses, uploadedFiles, isUploading } = useUploadFile(
    "fileUploader",
    {
      defaultUploadedFiles: [],
    }
  )

  const [selectedFile, setSelectedFile] = useState<{
    url: string
    type: string
  } | null>(null)
  const [caption, setCaption] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [status, setStatus] = useState<string>("")

  useEffect(() => {
    console.log("Component re-rendered, selectedFile state:", selectedFile)
    console.log("Uploader props:", { uploadedFiles, isUploading })
  }, [selectedFile, uploadedFiles, isUploading])

  const handlePublishToInstagram = async () => {
    console.log("Current selectedFile before publishing:", selectedFile)

    if (!selectedFile) {
      console.log("No file selected to publish!")
      setStatus("No file selected. Please upload and select a file.")
      return
    }

    console.log("Publishing file:", selectedFile)

    setLoading(true)
    setProgress(0)
    setStatus("")

    try {
      // Simulate progress
      for (let i = 0; i <= 100; i += 20) {
        setProgress(i)
        await new Promise((resolve) => setTimeout(resolve, 300))
      }

      const isVideo = selectedFile.type.startsWith("video")

      const payload: PublishPayload = {
        ...(isVideo
          ? { videoUrl: selectedFile.url, mediaType: "REELS" }
          : { imageUrl: selectedFile.url }),
        caption: caption || "Default caption",
      }

      const response = await publishToInstagram(payload)

      setStatus("File published successfully!")
      setProgress(100)
    } catch (error: any) {
      setStatus(`Failed to publish file: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleFileClick = (file: { url: string; type: string }) => {
    setSelectedFile(file)
    console.log("Selected file state updated to:", file)
  }

  return (
    <div data-testid="uploader-component" className="flex flex-col gap-6">
      <FileUploader
        maxFileCount={4}
        maxSize={16 * 1024 * 1024}
        progresses={progresses}
        onUpload={onUpload}
        disabled={isUploading}
        data-testid="file-uploader" // Added data-testid
      />
      <UploadedFilesCard
        uploadedFiles={uploadedFiles}
        onSelectFile={(fileUrl, fileType) => {
          if (fileUrl && fileType) {
            handleFileClick({ url: fileUrl, type: fileType })
          }
        }}
        data-testid="uploaded-files-card" // Added data-testid
      />
      <Input
        type="text"
        placeholder="Write your caption here..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="mt-4 w-full"
        data-testid="caption-input" // Added data-testid
      />
      <Button
        className="mt-2 w-full"
        onClick={handlePublishToInstagram}
        disabled={loading}
        data-testid="publish-button" // Added data-testid
      >
        {loading ? "Publishing..." : "Publish to Instagram"}
      </Button>
      {loading && <Progress value={progress} className="mt-2 w-full" />}
      {status && (
        <p data-testid="status-message" className="mt-2 text-center text-sm">
          {status}
        </p>
      )}
    </div>
  )
}
