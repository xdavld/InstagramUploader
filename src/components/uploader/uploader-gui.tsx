import React, { useEffect, useState } from "react";
import { toast } from "sonner"; // Importieren Sie die toast-Funktion von Sonner



import { useUploadFile } from "@/hooks/use-upload-file";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const [selectedTab, setSelectedTab] = useState<string>("now")
  const [scheduledTime, setScheduledTime] = useState<Date | null>(null)
  const [mediaType, setMediaType] = useState<string>("REELS") // Default mediaType
  const [isStory, setIsStory] = useState<boolean>(false) // Neuer State

  useEffect(() => {
    console.log("Component re-rendered, selectedFile state:", selectedFile)
    console.log("Uploader props:", { uploadedFiles, isUploading })
  }, [selectedFile, uploadedFiles, isUploading])

  const handlePublishToInstagram = async () => {
    if (disabled) return // Prevent publishing in preview mode

    if (!selectedFile) {
      toast.error("No file selected. Please upload and select a file.")
      return
    }
    setProgress(0)

    const payload: PublishPayload = {
      ...(selectedFile.type.startsWith("video")
        ? { videoUrl: selectedFile.url, mediaType }
        : { imageUrl: selectedFile.url, mediaType }),
      caption: caption || "Default caption",
      selectedTab,
      scheduledTime,
      isStory,
    }

    try {
      if (selectedTab === "now") {
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
          toast.error(
            `Publishing failed: ${errorData.error || "An error occurred."}`
          )
          return
        }

        toast.success("Datei erfolgreich veröffentlicht!") // Erfolgsmeldung bleibt auf Deutsch
        setProgress(100)
      } else if (selectedTab === "schedule") {
        if (!scheduledTime) {
          toast.error("Please select a date and time to schedule your post.")
          return
        }

        const now = new Date()
        const timeDifference = scheduledTime.getTime() - now.getTime()

        if (timeDifference < 0) {
          toast.error("Please select a future date and time.")
          return
        }

        toast.success(`Post successfully planned for ${scheduledTime.toLocaleString()}!`) // Erfolgsmeldung bleibt auf Deutsch

        const response = await fetch("/api/instagram/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          const errorData = await response.json()
          toast.error(
            `Scheduling failed: ${errorData.error || "An error occurred."}`
          )
          return
        }
      }
    } catch (error) {
      console.error("Publishing error:", error)
      toast.error("An unexpected error occurred while publishing.")
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
      toast.error("No file selected. Please upload and select a file.")
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
      toast.success("Die Hashtags wurden erfolgreich generiert.") // Erfolgsmeldung bleibt auf Deutsch
    } catch (error) {
      console.error("Error generating hashtags:", error)
      toast.error("An error occurred while generating hashtags.")
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
          />
          <Card>
            <CardHeader>
              <CardTitle>Additional Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Limit Number of Posts per Day */}
              <div className="max-w grid w-full items-center gap-1.5">
                <Label htmlFor="quantity">Limit Posts per Day</Label>
                <div className="flex items-center space-x-2">
                  <Input type="number" id="quantity" defaultValue="0" min="0" />
                  <Button type="submit">Set Limit</Button>
                </div>
              </div>
              {/* Story Posts */}
              <div className="flex items-center space-x-4">
                <Checkbox
                  id="story"
                  checked={isStory}
                  onCheckedChange={(checked) => setIsStory(checked)}
                />
                <div>
                  <Label htmlFor="story">Share as a Story</Label>
                  <p className="text-sm text-muted-foreground">
                    Your post will be visible on your profile for 24 hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button
            className="mt-2 mb-4 w-full"
            onClick={handlePublishToInstagram}
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish to Instagram"}
          </Button>
          {loading && <Progress value={progress} className="mt-2 w-full" />}
          {/* Entfernen Sie das Status-<p>-Element */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}