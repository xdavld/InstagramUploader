"use client";

import { useEffect, useState } from "react";



import { SiteHeader } from "@/components/layouts/site-header";
import { Shell } from "@/components/shell";
import { Uploader } from "@/components/uploader/uploader-gui";





export default function UploaderPage() {
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  useEffect(() => {
    const preview = sessionStorage.getItem("previewMode") === "true"
    console.log("Preview mode detected:", preview)
    setIsPreviewMode(preview)

    if (preview) {
      sessionStorage.removeItem("previewMode")
    }
  }, [])

  return (
    <>
      <SiteHeader />
      <Shell>
        {isPreviewMode && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <p className="text-lg text-white">
              Preview Mode: Interactions Disabled
            </p>
          </div>
        )}
        <Uploader disabled={isPreviewMode} />
      </Shell>
    </>
  )
}