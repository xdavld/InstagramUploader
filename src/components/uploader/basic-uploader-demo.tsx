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

  const generateHashtags = async () => {
    if (!selectedFile) {
      console.error("No file selected to generate hashtags!");
      setStatus("No file selected. Please upload and select a file.");
      return;
    }
  
    try {
      const response = await fetch("/api/openAI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: selectedFile.url }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to generate hashtags from the backend.");
      }
  
      const { hashtags } = await response.json();
      setCaption(hashtags || ""); // Setze die generierten Hashtags als Caption
    } catch (error) {
      console.error("Error generating hashtags:", error);
      setStatus("An error occurred while generating hashtags.");
    }
  };
  

  return (
    <div className="flex flex-col gap-6">
      <FileUploader
        maxFileCount={4}
        maxSize={16 * 1024 * 1024}
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
<div className="flex flex-col">
  <div className="flex gap-4 items-center">
    <Input
      type="text"
      placeholder="Write your caption here..."
      value={caption}
      onChange={(e) => setCaption(e.target.value)}
      className="mt-4 w-full"
    />
    <Button
      className="mt-4"
      variant="gradient"
      onClick={generateHashtags}

      //onClick={!loading ? generateHashtags : undefined} // Prevent triggering during loading
      //disabled={loading}
      >
      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 rounded-full p-[0.1px]"></span>
    
      <span className="relative flex items-center justify-center h-full w-full bg-white text-black rounded-full px-4 py-2">
        Generate with AI
      </span>
    </Button>
  </div>
  <Button
    className="mt-2 w-full"
    onClick={handlePublishToInstagram}
    disabled={loading}
  >
    {loading ? "Publishing..." : "Publish to Instagram"}
    </Button>
      </div>
      {loading && <Progress value={progress} className="mt-2 w-full" />}
      {/* Status message */}
      {status && <p className="mt-2 text-center text-sm">{status}</p>
      
      }
    </div>
  )
}