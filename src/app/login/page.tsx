"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { FaInstagram } from "react-icons/fa"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [config, setConfig] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication via API
    fetch("/api/instagram/auth/check-auth")
      .then((res) => res.json())
      .then((data) => {
        if (data.isAuthenticated) {
          setIsAuthenticated(true)
          router.push("/uploader")
        } else {
          // Fetch configuration from the server
          fetch("/api/instagram/config")
            .then((res) => {
              if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`)
              }
              return res.json()
            })
            .then((data) => setConfig(data))
            .catch((err) => console.error("Error fetching config:", err))
        }
      })
      .catch((err) => console.error("Error checking auth:", err))
  }, [router])

  const handleLogin = () => {
    if (!config) {
      console.error("Config not loaded yet.")
      return
    }

    const { clientId, redirectUri } = config
    const scope = encodeURIComponent(
      "instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments,instagram_business_content_publish"
    )
    const oauthUrl = `https://www.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`

    window.location.href = oauthUrl
  }

  const handlePreview = () => {
    console.log("Setting preview mode in sessionStorage...")
    sessionStorage.setItem("previewMode", "true")
    console.log("Redirecting to uploader...")
    router.push("/uploader")
  }

  if (isAuthenticated) {
    return <p>Redirecting...</p>
  }

  if (!config) {
    return <p>Loading...</p>
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <FaInstagram className="text-xl" />
            </div>
            Instagram Uploader
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm
              onLogin={handleLogin}
              onPreview={handlePreview}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/images/landingpage.jpg"
          alt="Landing Page"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-75 dark:grayscale"
        />
      </div>
    </div>
  )
}
