"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar"

export function NavLogout() {
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if preview mode is active
    const previewMode = sessionStorage.getItem("previewMode") === "true"
    setIsPreviewMode(previewMode)
  }, [])

  const handleLogout = async () => {
    if (isPreviewMode) {
      // Clear sessionStorage and redirect to /login
      sessionStorage.removeItem("previewMode")
      console.log("Exiting preview mode")
      router.push("/login")
    } else {
      try {
        // Call the logout API
        const res = await fetch("/api/instagram/auth/logout", { method: "GET" })

        if (res.ok) {
          console.log("Logout successful")
          router.push("/login")
        } else {
          console.error("Failed to log out")
        }
      } catch (error) {
        console.error("Logout failed:", error)
      }
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuButton onClick={handleLogout}>
        <LogOut />
        {isPreviewMode ? "Exit Preview" : "Logout"}
      </SidebarMenuButton>
    </SidebarMenu>
  )
}
