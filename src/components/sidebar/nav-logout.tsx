"use client"

import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar"

export function NavLogout() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      // Clear cookies or tokens on the client side
      document.cookie = "instagram_access_token=; Max-Age=0; path=/"

      // Optionally call a logout API to clear tokens on the server side
      await fetch("/api/instagram/auth/logout", { method: "POST" })

      // Redirect to login or home page
      router.push("/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuButton onClick={handleLogout}>
        <LogOut />
        Logout
      </SidebarMenuButton>
    </SidebarMenu>
  )
}
