import React, { useEffect, useState } from "react";



import { useUploadFile } from "@/hooks/use-upload-file";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { SchedulerTabs } from "@/components/ui/schedulerTabs";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { FileUploader } from "@/components/uploader/file-uploader";
import { PublishPayload } from "@/components/uploader/instagramPublish";
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
  const [selectedTab, setSelectedTab] = useState<string>("now")
  const [scheduledTime, setScheduledTime] = useState<Date | null>(null)
  const [mediaType, setMediaType] = useState<string>("REELS") // Default mediaType

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
    setProgress(0)
    setStatus("")

    const payload: PublishPayload = {
      ...(selectedFile.type.startsWith("video")
        ? { videoUrl: selectedFile.url, mediaType }
        : { imageUrl: selectedFile.url, mediaType }),
      caption: caption || "Default caption",
      selectedTab,
      scheduledTime,
    }

    try {
      if (selectedTab === "now" || selectedTab === "more") {
        setLoading(true)
        for (let i = 0; i <= 100; i += 20) {
          setProgress(i)
          await new Promise((resolve) => setTimeout(resolve, 300))
        }

        const response = await fetch("/api/instagram/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          const errorData = await response.json()
          setStatus(`Failed to publish: ${errorData.error}`)
          return
        }

        setStatus("File published successfully!")
        setProgress(100)
      } else if (selectedTab === "schedule") {
        if (!scheduledTime) {
          setStatus("Please select a date and time to schedule your post.")
          return
        }

        const now = new Date()
        const timeDifference = scheduledTime.getTime() - now.getTime()

        if (timeDifference < 0) {
          setStatus("Please select a date and time in the future.")
          return
        }

        setStatus("File scheduled successfully!")

        const response = await fetch("/api/instagram/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          const errorData = await response.json()
          setStatus(`Failed to publish scheduled post: ${errorData.error}`)
          return
        }
      }
    } catch (error) {
      console.error("Publishing error:", error)
      setStatus("An unexpected error occurred while publishing.")
    } finally {
      setLoading(false)
      setProgress(100)
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
      setCaption(hashtags || "") // Set generated hashtags as caption
    } catch (error) {
      console.error("Error generating hashtags:", error)
      setStatus("An error occurred while generating hashtags.")
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar className="top-14 h-[calc(100vh-14)]" />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink>Uploader</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div
          data-testid="uploader-component"
          className={`flex flex-col gap-6 px-4 ${disabled ? "pointer-events-none opacity-50" : ""}`}
        >
          <FileUploader
            maxFileCount={4}
            maxSize={8 * 1024 * 1024}
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
          <Card>
            <CardHeader>
              <CardTitle data-testid="uploaded-files-title">Caption</CardTitle>
              <CardDescription data-testid="uploaded-files-description">
                Add a caption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                type="text"
                placeholder="Write your caption here..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full"
              />
              <Button
                className="relative mt-4 w-[200px] rounded-full bg-transparent p-0 text-white"
                onClick={generateHashtags}
              >
                <span className="pointer-events-none absolute inset-0 rounded-full border-[0px] bg-gradient-to-tl from-[#0fd850] via-[#f9f047] to-[#f9f047]"></span>
                <span className="relative flex h-[80%] w-[95%] items-center justify-center rounded-full bg-black hover:bg-[#2F2F31]">
                  Generate with AI
                </span>
              </Button>
            </CardContent>
          </Card>
          <SchedulerTabs
            value={selectedTab}
            setSelectedTab={setSelectedTab}
            setScheduledTime={setScheduledTime}
            setMediaType={setMediaType} // Pass the setMediaType function
          />
          <Button
            className="mt-4 w-full"
            onClick={handlePublishToInstagram}
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish to Instagram"}
          </Button>
          {loading && <Progress value={progress} className="mt-2 w-full" />}
          {status && <p className="mt-2 text-center text-sm">{status}</p>}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}