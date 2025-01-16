// /components/Uploader.js

import React, { useEffect, useState } from "react";
import { toast } from "sonner"; // Import the toast function from Sonner

import { useUploadFile } from "@/hooks/use-upload-file";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { SchedulerTabs } from "@/components/ui/schedulerTabs";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { FileUploader } from "@/components/uploader/file-uploader";
import { UploadedFilesCard } from "@/components/uploader/uploaded-files-card";

// Spinner Component
const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 text-white ml-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-label="Loading"
    role="img"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    ></path>
  </svg>
);

export function Uploader({ disabled = false }) {
  const { onUpload, progresses, uploadedFiles, isUploading } = useUploadFile(
    "fileUploader",
    {
      defaultUploadedFiles: [],
    }
  );

  const [selectedFile, setSelectedFile] = useState<{
    url: string;
    type: string;
  } | null>(null);
  const [caption, setCaption] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<string>("now");
  const [scheduledTime, setScheduledTime] = useState<Date | null>(null);
  const [mediaType, setMediaType] = useState<string>("REELS"); // Default mediaType
  const [isStory, setIsStory] = useState<boolean>(false); // New state
  const [isAnimating, setIsAnimating] = useState<boolean>(false); // New state

  // New state variables for post limit
  const [postLimitPerDay, setPostLimitPerDay] = useState<number>(0);
  const [postsPublishedToday, setPostsPublishedToday] = useState<number>(0);
  const [limitSet, setLimitSet] = useState<boolean>(false);
  const [isGeneratingHashtags, setIsGeneratingHashtags] =
    useState<boolean>(false);

  // Variable to check if an image is selected
  const isImageSelected = selectedFile && selectedFile.type.startsWith("image/");

  useEffect(() => {
    console.log("Component re-rendered, selectedFile state:", selectedFile);
    console.log("Uploader props:", { uploadedFiles, isUploading });
  }, [selectedFile, uploadedFiles, isUploading]);

  // Load post limit and published count from localStorage on mount
  useEffect(() => {
    const storedLimit = localStorage.getItem("postLimitPerDay");
    const storedCount = localStorage.getItem("postsPublishedToday");
    const storedDate = localStorage.getItem("postLimitDate");

    const today = new Date().toDateString();

    if (storedDate !== today) {
      // Reset count if it's a new day
      localStorage.setItem("postLimitDate", today);
      localStorage.setItem("postsPublishedToday", "0");
      setPostsPublishedToday(0);
    } else {
      setPostsPublishedToday(storedCount ? parseInt(storedCount, 10) : 0);
    }

    if (storedLimit) {
      setPostLimitPerDay(parseInt(storedLimit, 10));
      setLimitSet(true);
    }
  }, []);

  // Save post limit to localStorage whenever it changes
  useEffect(() => {
    if (limitSet) {
      localStorage.setItem("postLimitPerDay", postLimitPerDay.toString());
    }
  }, [postLimitPerDay, limitSet]);

  // Save posts published today to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("postsPublishedToday", postsPublishedToday.toString());
  }, [postsPublishedToday]);

  const animateText = async (fullText: string, interval = 30) => {
    setIsAnimating(true);
    setCaption(""); // Clear the textarea
    for (let i = 0; i <= fullText.length; i++) {
      setCaption(fullText.slice(0, i));
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
    setIsAnimating(false);
  };

  const handlePublishToInstagram = async () => {
    if (disabled) return; // Prevent publishing in preview mode

    if (!selectedFile) {
      toast.error("No file selected. Please upload and select a file.");
      return;
    }

    // Check if post limit is set and not exceeded
    if (limitSet && postsPublishedToday >= postLimitPerDay) {
      toast.error("Daily post limit reached. Please try again tomorrow.");
      return;
    }

    setProgress(0);

    const payload: PublishPayload = {
      ...(selectedFile.type.startsWith("video")
        ? { videoUrl: selectedFile.url, mediaType }
        : { imageUrl: selectedFile.url, mediaType }),
      caption: caption || "Default caption",
      selectedTab,
      scheduledTime,
      isStory,
    };

    try {
      if (selectedTab === "now" || selectedTab === "more") {
        setLoading(true);
        for (let i = 0; i <= 100; i += 20) {
          setProgress(i);
          await new Promise((resolve) => setTimeout(resolve, 300));
        }

        const response = await fetch("/api/instagram/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorData = await response.json();
          toast.error(
            `Publishing failed: ${errorData.error || "An error occurred."}`
          );
          return;
        }

        toast.success("Datei erfolgreich veröffentlicht!"); // Success message remains in German
        setProgress(100);

        // Increment the count of published posts today
        if (limitSet) {
          setPostsPublishedToday(postsPublishedToday + 1);
        }
      } else if (selectedTab === "schedule") {
        if (!scheduledTime) {
          toast.error("Please select a date and time to schedule your post.");
          return;
        }

        const now = new Date();
        const timeDifference = scheduledTime.getTime() - now.getTime();

        if (timeDifference < 0) {
          toast.error("Please select a future date and time.");
          return;
        }

        toast.success(
          `Post successfully planned for ${scheduledTime.toLocaleString()}!`
        ); // Success message remains in German

        const response = await fetch("/api/instagram/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorData = await response.json();
          toast.error(
            `Scheduling failed: ${errorData.error || "An error occurred."}`
          );
          return;
        }

        // Increment the count of published posts today
        if (limitSet) {
          setPostsPublishedToday(postsPublishedToday + 1);
        }
      }
    } catch (error) {
      console.error("Publishing error:", error);
      toast.error("An unexpected error occurred while publishing.");
    } finally {
      setLoading(false);
      setProgress(100);
    }
  };

  /**
   * Handle selection and unselection of a file.
   * @param {string | null} fileUrl - The URL of the selected file or null if unselected.
   * @param {string} [fileType] - The type of the selected file.
   */
  const handleSelectFile = (fileUrl: string | null, fileType?: string) => {
    if (fileUrl && fileType) {
      handleFileClick({ url: fileUrl, type: fileType });
    } else {
      setSelectedFile(null); // Unselect the file
    }
  };

  const handleFileClick = (file: { url: string; type: string }) => {
    if (disabled) return; // Prevent file selection in preview mode
    setSelectedFile((prev) =>
      prev?.url === file.url && prev.type === file.type ? null : file
    );
  };

  const generateHashtags = async () => {
    if (!selectedFile) {
      console.error("No file selected to generate hashtags!");
      toast.error("No file selected. Please upload and select a file.");
      return;
    }

    try {
      setIsGeneratingHashtags(true); // Start loading
      const response = await fetch("/api/openAI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: selectedFile.url }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate hashtags from the backend.");
      }

      const { hashtags } = await response.json();
      const fullText = hashtags || "";

      // Start the text animation
      await animateText(fullText);

      toast.success("The Text was successfully generated!"); // Success message in English
    } catch (error) {
      console.error("Error generating hashtags:", error);
      toast.error("An error occurred while generating hashtags.");
    } finally {
      setIsGeneratingHashtags(false); // End loading
    }
  };

  // Handler to set the post limit
  const handleSetPostLimit = () => {
    const inputElement = document.getElementById(
      "postLimitInput"
    ) as HTMLInputElement;
    const limit = parseInt(inputElement.value, 10);

    if (isNaN(limit) || limit < 0) {
      toast.error("Please enter a valid number for the post limit.");
      return;
    }

    setPostLimitPerDay(limit);
    setLimitSet(true);
    toast.success(`Daily post limit set to ${limit} posts.`);
  };

  // Handler to remove a selected file
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

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
          className={`flex flex-col gap-6 px-4 ${
            disabled ? "pointer-events-none opacity-50" : ""
          }`}
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
            onSelectFile={handleSelectFile}
            data-testid="uploaded-files-card"
          />
          {/* Display selected file with an option to unselect */}
          {selectedFile && (
            <Card>
              <CardHeader>
                <CardTitle>Selected File</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span>{selectedFile.url}</span>
                <Button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-red-500"
                >
                  Unselect
                </Button>
              </CardContent>
            </Card>
          )}
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
                disabled={isAnimating} // Disable during animation
              />
              <Button
                className="relative mt-4 w-[200px] rounded-full bg-transparent p-0 text-white flex items-center justify-center"
                onClick={generateHashtags}
                disabled={
                  isAnimating || !isImageSelected || isGeneratingHashtags
                } // Disable if animating, no image, or generating
              >
                <span className="pointer-events-none absolute inset-0 rounded-full border-[0px] bg-gradient-to-tl from-[#0fd850] via-[#f9f047] to-[#f9f047]"></span>
                <span className="relative flex h-[80%] w-[95%] items-center justify-center rounded-full bg-black hover:bg-[#2F2F31]">
                  Generate with AI
                  {isGeneratingHashtags && <Spinner />} {/* Conditionally render spinner */}
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
                  <Input
                    type="number"
                    id="postLimitInput"
                    defaultValue="0"
                    min="0"
                    placeholder="Enter limit"
                  />
                  <Button type="button" onClick={handleSetPostLimit}>
                    Set Limit
                  </Button>
                </div>
              </div>
              {/* Display remaining posts if limit is set */}
              {limitSet && (
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground">
                    You have{" "}
                    <strong>
                      {postLimitPerDay - postsPublishedToday}{" "}
                      {postLimitPerDay - postsPublishedToday === 1
                        ? "post"
                        : "posts"}
                    </strong>{" "}
                    remaining for today.
                  </p>
                </div>
              )}
              {/* Story Posts */}
              <div className="flex items-center space-x-4">
                <Checkbox
                  id="story"
                  checked={isStory}
                  onCheckedChange={(checked) => setIsStory(checked)}
                  disabled={!isImageSelected} // Disable if no image selected
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
          <div className="mb-6">
            <Button
              className="mt-2 w-full"
              onClick={handlePublishToInstagram}
              disabled={
                loading || (limitSet && postsPublishedToday >= postLimitPerDay)
              }
            >
              {loading ? "Publishing..." : "Publish to Instagram"}
            </Button>
            {loading && (
              <Progress value={progress} className="mt-2 w-full" />
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
