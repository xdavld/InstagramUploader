"use client"

import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar"

export function NavLogout() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      // Call the logout API
      const res = await fetch("/api/instagram/auth/logout", { method: "GET" })

      if (res.ok) {
        console.log("Logout successful")
        // Redirect to login page
        router.push("/login")
      } else {
        console.error("Failed to log out")
      }
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
