"use client";

import { useEffect, useState } from "react";



import { SiteHeader } from "@/components/layouts/site-header";
import { Shell } from "@/components/shell";
import { BasicUploaderDemo } from "@/components/uploader/basic-uploader-demo";





export default function IndexPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const accessToken = localStorage.getItem("instagram_access_token")
    if (!accessToken) {
      const clientId = "967181185255438"
      const redirectUri = encodeURIComponent(
        "https://software-engineering-project-8hsfjxsn6-xdavlds-projects.vercel.app"
      )
      const scope = encodeURIComponent(
        "instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments,instagram_business_content_publish"
      )
      const oauthUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`

      window.location.href = oauthUrl
    } else {
      setIsAuthenticated(true)
    }
  }, [])

  if (!isAuthenticated) {
    return (
        <p>Redirecting to Instagram login...</p>
    )
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