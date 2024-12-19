"use client";

import { useEffect, useState } from "react";



import { SiteHeader } from "@/components/layouts/site-header";
import { Shell } from "@/components/shell";
import { BasicUploaderDemo } from "@/components/uploader/basic-uploader-demo";





export default function IndexPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get("code")
    const accessToken = localStorage.getItem("instagram_access_token")

    if (accessToken) {
      setIsAuthenticated(true)
      return
    }

    if (code) {
      const fetchAccessToken = async () => {
        try {
          const response = await fetch("/api/instagram/oauth.ts", { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
          })

          if (!response.ok) {
            throw new Error("Failed to fetch access token")
          }

          const data = await response.json()
          localStorage.setItem("instagram_access_token", data.access_token)
          setIsAuthenticated(true)
        } catch (error) {
          console.error("Error fetching access token:", error)
        }
      }

      fetchAccessToken()
    } else {
      const clientId = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID
      const redirectUri = encodeURIComponent(
        process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI || ""
      )
      const scope = encodeURIComponent(
        "instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments,instagram_business_content_publish"
      )
      const oauthUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`

      window.location.href = oauthUrl
    }
  }, [])

  if (!isAuthenticated) {
    return <p>Redirecting to Instagram login...</p>
  }

  return (
    <>
      <SiteHeader />
      <Shell>
        <BasicUploaderDemo />
      </Shell>
    </>
  )
}