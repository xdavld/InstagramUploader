"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { FaInstagram } from "react-icons/fa"

import { LoadingSpinner } from "@/components/loading-spinner"
import { LoginForm } from "@/components/login-form"

interface Config {
  clientId: string
  redirectUri: string
}

export default function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [config, setConfig] = useState<Config | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [instagramProfile, setInstagramProfile] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(true) // Unified loading state
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authRes = await fetch("/api/instagram/auth/check-auth")
        const authData = await authRes.json()

        if (authData.isAuthenticated) {
          setIsAuthenticated(true)
          const profileRes = await fetch("/api/instagram/profile")
          const profileData = await profileRes.json()
          setInstagramProfile(profileData)
          router.push("/uploader") // Redirect to uploader
        } else {
          const configRes = await fetch("/api/instagram/config")
          if (!configRes.ok) {
            throw new Error(`Failed to load config: ${configRes.statusText}`)
          }
          const configData = await configRes.json()
          setConfig(configData)
        }
      } catch (err) {
        console.error("Error during initialization:", err)
        setError("Something went wrong. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const handleLogin = () => {
    if (!config) {
      setError("Configuration not loaded. Please try again.")
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
    sessionStorage.setItem("previewMode", "true")
    router.push("/uploader")
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    )
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
