"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { SiteHeader } from "@/components/layouts/site-header"
import { Shell } from "@/components/shell"
import { Uploader } from "@/components/uploader/uploader-gui"

export default function UploaderPage() {
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const preview = sessionStorage.getItem("previewMode") === "true"
    const accessToken = localStorage.getItem("instagram_access_token")

    if (accessToken) {
      setIsAuthenticated(true)
    } else if (preview) {
      setIsPreviewMode(true)
      sessionStorage.removeItem("previewMode") // Clear preview mode after use
    } else {
      router.push("/login") // Redirect to login if not authenticated and not in preview mode
    }
  }, [router])

  if (!isAuthenticated && !isPreviewMode) {
    return <p>Loading...</p> // Loading state while deciding redirect
  }

  return (
    <>
      <SiteHeader />
      <Shell>
        {isPreviewMode && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-10">
            <p className="text-white">Preview Mode: Limited functionality</p>
          </div>
        )}
        <Uploader disabled={isPreviewMode} />
      </Shell>
    </>
  )
}
