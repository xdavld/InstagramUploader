"use client";

import { useEffect, useState } from "react";



import { SiteHeader } from "@/components/layouts/site-header";
import { Calendar } from "@/components/calendar/calendar-gui";





export default function CalendarPage() {
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
    <Calendar />
    </>
  )
}