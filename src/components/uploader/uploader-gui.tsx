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
  const [scheduledTime, setScheduledTime] = useState<Date>();

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

    if (selectedTab == "now") {
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
    } else if (selectedTab == "schedule") {

      if (!scheduledTime) {
        setStatus("Please select a date and time to schedule your post.");
        return
      }

      try {  
        const isVideo = selectedFile.type.startsWith("video")
  
        const payload: PublishPayload = {
          ...(isVideo
            ? { videoUrl: selectedFile.url, mediaType: "REELS" }
            : { imageUrl: selectedFile.url }),
          caption: caption || "Default caption",
        }

        setStatus("File scheduled successfully!")
        
        const now = new Date();
        const timeDifference = scheduledTime.getTime() - now.getTime()
        if (timeDifference < 0) {
          setStatus("Please select a date and time in the future.");
          return
        }

        setTimeout( async () => {
          await publishToInstagram(payload)
        }, timeDifference)

      } catch (error: any) {
        // ToDo: Error Popup
        setStatus(`Failed to scheduled and publish file: ${error.message}`)
      }
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
      <div className="flex flex-col">
        <div className="flex gap-4 items-center">
          <Input
            type="text"
            placeholder="Write your caption here..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="mt-2 w-full"
          />
          <Button
            className="relative mt-2 p-0 rounded-full bg-transparent text-white w-[200px]"
            onClick={generateHashtags}
          >
            <span className="absolute inset-0 rounded-full border-[0px] bg-gradient-to-tl from-[#0fd850] via-[#f9f047] to-[#f9f047] pointer-events-none"></span>
            <span className="relative flex items-center justify-center h-[80%] w-[95%] bg-black rounded-full hover:bg-[#2F2F31]">
              Generate with AI
            </span>
          </Button>
        </div>
        </div>
        <SchedulerTabs value={selectedTab} setSelectedTab={setSelectedTab} setScheduledTime={setScheduledTime}></SchedulerTabs>
        <Button
          className="mt-4 w-full"
          onClick={handlePublishToInstagram}
          disabled={loading}
        >
          {loading ? "Publishing..." : "Publish to Instagram"}
          </Button>
            {loading && <Progress value={progress} className="mt-2 w-full" />}
            {/* Status message */}
            {status && <p className="mt-2 text-center text-sm">{status}</p>
            
            }
      </div>
  )
}