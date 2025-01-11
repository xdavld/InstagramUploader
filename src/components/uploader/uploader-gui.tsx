import React, { useEffect, useState } from "react";



import { useUploadFile } from "@/hooks/use-upload-file";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { SchedulerTabs } from "@/components/ui/schedulerTabs";
import { FileUploader } from "@/components/uploader/file-uploader";
import { PublishPayload, publishToInstagram } from "@/components/uploader/instagramPublish";
import { UploadedFilesCard } from "@/components/uploader/uploaded-files-card";





export function Uploader({ disabled = false }) {
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
  const [selectedTab, setSelectedTab] = useState<string>("now");

  useEffect(() => {
    console.log("Component re-rendered, selectedFile state:", selectedFile)
    console.log("Uploader props:", { uploadedFiles, isUploading })
  }, [selectedFile, uploadedFiles, isUploading])

  const handlePublishToInstagram = async () => {
    if (disabled) return // Prevent publishing in preview mode

    if (!selectedFile) {
      setStatus("No file selected. Please upload and select a file.")
      return
    }

    setLoading(true)
    setProgress(0)
    setStatus("")

    try {
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

      await publishToInstagram(payload)

      setStatus("File published successfully!")
      setProgress(100)
    } catch (error: any) {
      setStatus(`Failed to publish file: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleFileClick = (file: { url: string; type: string }) => {
    if (disabled) return // Prevent file selection in preview mode
    setSelectedFile(file)
  }

  const generateHashtags = async () => {
    if (!selectedFile) {
      console.error("No file selected to generate hashtags!")
      setStatus("No file selected. Please upload and select a file.")
      return
    }

    try {
      const response = await fetch("/api/openAI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: selectedFile.url }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate hashtags from the backend.")
      }

      const { hashtags } = await response.json()
      setCaption(hashtags || "") // Setze die generierten Hashtags als Caption
    } catch (error) {
      console.error("Error generating hashtags:", error)
      setStatus("An error occurred while generating hashtags.")
    }
  }

  return (
    <div
      data-testid="uploader-component"
      className={`flex flex-col gap-6 ${disabled ? "pointer-events-none opacity-50" : ""}`}
    >
      <FileUploader
        maxFileCount={4}
        maxSize={16 * 1024 * 1024}
        progresses={progresses}
        onUpload={onUpload}
        disabled={isUploading || disabled}
        data-testid="file-uploader"
      />
      <UploadedFilesCard
        uploadedFiles={uploadedFiles}
        onSelectFile={(fileUrl, fileType) => {
          if (fileUrl && fileType) {
            handleFileClick({ url: fileUrl, type: fileType })
          }
        }}
        data-testid="uploaded-files-card"
      />
      <SchedulerTabs value={selectedTab} setSelectedTab={setSelectedTab}></SchedulerTabs>
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