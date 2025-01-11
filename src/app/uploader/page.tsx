"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

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

    if (preview) {
      setIsPreviewMode(true)
      sessionStorage.removeItem("previewMode") // Clear only after detection
      setIsLoading(false)
    } else {
      // Check authentication via API
      fetch("/api/instagram/auth/check-auth")
        .then((res) => res.json())
        .then((data) => {
          if (data.isAuthenticated) {
            setIsAuthenticated(true)
          } else {
            router.push("/login")
          }
          setIsLoading(false)
        })
        .catch((err) => {
          console.error("Error checking auth:", err)
          setIsLoading(false)
        })
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
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-05"></div>
        )}
        <Uploader disabled={isPreviewMode} />
      </Shell>
    </>
  )
}
