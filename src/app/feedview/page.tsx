"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { FeedView } from "@/components/feedview/feedview-gui"
import { SiteHeader } from "@/components/layouts/site-header"
import { LoadingSpinner } from "@/components/loading-spinner" // Import the spinner

export default function FeedViewPage() {
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const handlePreview = () => {
    console.log("Setting preview mode in sessionStorage...")
    sessionStorage.setItem("previewMode", "true")
    console.log("Redirecting to FeedView...")
    router.push("/feedview") // Redirect to the current page but with preview mode set
  }

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
    return <LoadingSpinner />
  }

  return (
    <>
      <SiteHeader />
      {!isAuthenticated && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={handlePreview}
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Preview FeedView
          </button>
        </div>
      )}
      <FeedView />
    </>
  )
}
