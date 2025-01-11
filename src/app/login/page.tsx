"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaInstagram } from "react-icons/fa";



import { LoginForm } from "@/components/login-form";





export default function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const accessToken = localStorage.getItem("instagram_access_token")
    if (accessToken) {
      setIsAuthenticated(true)
      router.push("/uploader")
    }
  }, [router])

  const handleLogin = () => {
    const clientId = "YOUR_CLIENT_ID"
    const redirectUri = "YOUR_REDIRECT_URI"
    const scope = encodeURIComponent(
      "instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments,instagram_business_content_publish"
    )
    const oauthUrl = `https://www.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`

    window.location.href = oauthUrl
  }

  const handlePreview = () => {
    console.log("Preview button clicked") // Step 1
    sessionStorage.setItem("previewMode", "true")
    console.log("Preview mode set in sessionStorage") // Step 2
    router.push("/uploader")
    console.log("Redirected to /uploader") // Step 3
  }

  if (isAuthenticated) {
    return <p>Redirecting...</p>
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