"use client"

import React, { useState } from "react"

import { useUploadFile } from "@/hooks/use-upload-file"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { FileUploader } from "@/components/file-uploader"
import { UploadedFilesCard } from "@/components/uploader/uploaded-files-card"

export function BasicUploaderDemo() {
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

  const handlePublishToInstagram = async () => {
    if (!selectedFile) {
      console.error("No file selected to publish!")
      setStatus("No file selected. Please upload and select a file.")
      return
    }

    setLoading(true) // Start loading
    setProgress(0) // Reset progress
    setStatus("") // Reset status message

    try {
      // Simulate publishing process and dynamic progress
      for (let i = 0; i <= 100; i += 20) {
        setProgress(i) // Update progress
        await new Promise((resolve) => setTimeout(resolve, 300)) // Simulate delay
      }

      const isVideo = selectedFile.type.startsWith("video")

      // API call to publish the file
      const response = await fetch("/api/instagram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [isVideo ? "videoUrl" : "imageUrl"]: selectedFile.url,
          caption: caption || "Default caption",
          ...(isVideo && { mediaType: "REELS" }), // Add mediaType for videos
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("File published successfully:", data)
        setStatus("File published successfully!")
        setProgress(100) // Complete progress
      } else {
        console.error("Failed to publish file:", (data as any).error)
        setStatus(`Failed to publish file: ${(data as any).error}`)
      }
    } catch (error) {
      console.error("An error occurred while publishing:", error)
      setStatus("An error occurred while publishing. Please try again.")
    } finally {
      setLoading(false) // Stop loading
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
      <UploadedFilesCard
        uploadedFiles={uploadedFiles}
        onSelectFile={(fileUrl, fileType) => {
          if (fileUrl && fileType) {
            setSelectedFile({ url: fileUrl, type: fileType })
          }
        }}
      />
      <Input
        type="text"
        placeholder="Write your caption here..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="mt-4 w-full"
      />
      <Button
        className="mt-2 w-full"
        onClick={handlePublishToInstagram}
        disabled={loading}
      >
        {loading ? "Publishing..." : "Publish to Instagram"}
      </Button>
      {loading && <Progress value={progress} className="mt-2 w-full" />}
      {/* Status message */}
      {status && <p className="mt-2 text-center text-sm">{status}</p>}
    </div>
  )
}