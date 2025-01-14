"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { SiteHeader } from "@/components/layouts/site-header"
import { LoadingSpinner } from "@/components/loading-spinner"
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
      setIsLoading(false) // Mark loading complete
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
    return <LoadingSpinner />
  }

  return (
    <>
      <SiteHeader />
      <div className="h-14"></div>
      <Uploader disabled={isPreviewMode} />
    </>
  )
}
