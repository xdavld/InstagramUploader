"use client";

import { useEffect, useState } from "react";



import { SiteHeader } from "@/components/layouts/site-header";
import { Shell } from "@/components/shell";
import { Dashboard } from "@/components/dashboard/dashboard-gui";





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
      <Shell>
        <Dashboard/>
      </Shell>
    </>
  )
}