"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { SiteHeader } from "@/components/layouts/site-header"
import { Shell } from "@/components/shell"
import { Uploader } from "@/components/uploader/uploader-gui"

export default function UploaderPage() {
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const preview = sessionStorage.getItem("previewMode") === "true"
    const accessToken = localStorage.getItem("instagram_access_token")

    console.log("Preview mode:", preview)
    console.log("Access token:", accessToken)

    if (preview) {
      setIsPreviewMode(true)
      sessionStorage.removeItem("previewMode") // Clear only after detection
      setIsLoading(false)
    } else if (accessToken) {
      setIsAuthenticated(true)
      setIsLoading(false)
    } else {
      router.push("/login")
    }
  }, [router])

  if (isLoading) {
    return <p>Loading...</p>
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
